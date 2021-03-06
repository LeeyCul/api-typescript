/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-constant-condition */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as changeCase from 'change-case';
import dayjs from 'dayjs';
import fs from 'fs-extra';
import path, { dirname } from 'path';
import * as conso from './console';
import _ from 'lodash';
import os from 'os';
import {
  castArray,
  cloneDeepFast,
  dedent,
  groupBy,
  isEmpty,
  isFunction,
  last,
  memoize,
  noop,
  omit,
  uniq,
  values,
  pick
} from 'vtils';
import {
  CategoryList,
  CommentConfig,
  Config,
  ExtendedInterface,
  Interface,
  InterfaceList,
  Project,
  ProjectConfig,
  ServerConfig,
  SyntheticalConfig,
  GeneratorOptions,
  RequestFunctionTemplateProps
} from './types';
import { exec } from 'child_process';
import {
  getRequestDataJsonSchema,
  getResponseDataJsonSchema,
  jsonSchemaToType,
  formatContent,
  topNotesContent
} from './utils';
import { SwaggerToYApiServer } from './SwaggerToYApiServer';
import GenRequest from './genRequest';
import GenIndex from './genIndex';
import { genJsonSchemeConstContent } from './responseDataJsonSchemaHandler';
import { fetchInterfaceList, fetchProject, fetchProjectInfo } from './requestYapiData';
import { getOutputFilePath } from './getOutputPath';

interface OutputFileList {
  [outputFilePath: string]: {
    projectId: string;
    categoryId: string;
    syntheticalConfig: SyntheticalConfig;
    content: string[];
    outputResponseDataJsonSchemaFilePath: string;
    responseDataJsonSchemaContent: string[];
    requestFunctionFilePath: string;
    requestHookMakerFilePath: string;
  };
}

// ??????????????????????????????
function defaultTopImportPkgTemplate(config?: Config) {
  const { defaultRequestLib } = config || {};
  return !defaultRequestLib ? `import request from '../request'` : '';
}

const getDataKeySetStr = (method: string) => {
  if (['head', 'option', 'get'].includes(method.toLowerCase())) {
    return 'params: data';
  }
  return 'data';
};
// ?????????????????????????????????
function defaultRequestFunctionTemplate(props: RequestFunctionTemplateProps, config?: SyntheticalConfig): string {
  const { baseURL, requestFunctionName, requestDataTypeName, responseDataTypeName, extendedInterfaceInfo } = props;
  const { req_params, req_query } = extendedInterfaceInfo;
  const hasData = req_params.length || req_query.length;
  const method = extendedInterfaceInfo.method.toLowerCase();
  let finalBaseUrl = '';
  if (baseURL?.match(/^\[code\]:/)) {
    // ????????????[code]??????????????????????????????????????????????????????????????????
    finalBaseUrl = baseURL.replace(/^\[code\]:/, '');
  } else {
    finalBaseUrl = `"${baseURL}"`;
  }
  return `export const ${requestFunctionName} = (data${hasData ? '' : '?'}: ${requestDataTypeName}) => {
    return request.${method}<${requestDataTypeName},${responseDataTypeName}>(${JSON.stringify(
    extendedInterfaceInfo.path
  )}, {
      ${getDataKeySetStr(method)},
      ${baseURL ? `baseURL: ${finalBaseUrl}` : ''}
    })
  }`;
}

// ???????????????????????????????????????
function adminRequestFunctionTemplate(props: RequestFunctionTemplateProps, config?: SyntheticalConfig): string {
  const { baseURL, requestFunctionName, requestDataTypeName, responseDataTypeName, extendedInterfaceInfo } = props;
  const { req_params, req_query } = extendedInterfaceInfo;
  const hasData = req_params.length || req_query.length;
  let finalBaseUrl = '';
  if (baseURL?.match(/^\[code\]:/)) {
    // ????????????[code]??????????????????????????????????????????????????????????????????
    finalBaseUrl = baseURL.replace(/^\[code\]:/, '');
  } else {
    finalBaseUrl = `"${baseURL}"`;
  }

  const url = config?.proxyInterface?.path || '/admin-interface/proxy/v0/proxy';

  return `export const ${requestFunctionName} = (data${hasData ? '' : '?'}: ${requestDataTypeName}) => {
    return request.post<${requestDataTypeName},${responseDataTypeName}>( '${url}', {
      data:{
        real_url: '${extendedInterfaceInfo.path}',
        params: JSON.stringify(data)
      },
      ${baseURL ? `baseURL: ${finalBaseUrl}` : ''}
    })
  }`;
}

export class Generator {
  /** ?????? */
  private config: ServerConfig;

  private disposes: Array<() => any> = [];

  constructor(config: Config, private options: GeneratorOptions = { cwd: process.cwd() }) {
    // config ??????????????????????????????????????????
    this.config = config;
  }

  async prepare(): Promise<void> {
    if (this.config.serverType === 'swagger') {
      const swaggerToYApiServer = new SwaggerToYApiServer({
        swaggerJsonUrl: this.config.serverUrl
      });
      this.config.serverUrl = await swaggerToYApiServer.start();
      this.disposes.push(() => swaggerToYApiServer.stop());
    }
    if (this.config.serverUrl) {
      // ????????????????????? /
      // fix: https://github.com/fjc0k/yapi-to-typescript/issues/22
      this.config.serverUrl = this.config.serverUrl.replace(/\/+$/, '');
    }
  }

  /**
   * ????????????
   * @returns
   */
  async generate(): Promise<OutputFileList> {
    const outputFileList: OutputFileList = Object.create(null);

    const { projects, serverUrl, serverType, preproccessInterface, outputFilePath } = this.config;
    const projectArray = castArray(projects);

    const projectArrayRender = projectArray.map(async (project, projectIndex) => {
      const projectInfo = await fetchProjectInfo({
        ...this.config,
        ...project
      });

      // ??????????????????
      const allInterfaceList = await fetchInterfaceList({
        serverUrl,
        token: project?.token
      });

      // ???????????????
      let categoryInterfaceList: Record<number | string, InterfaceList> = {};

      allInterfaceList.forEach((item, index) => {
        const catId = item._id;
        categoryInterfaceList[catId] = item.list || [];
      });

      const { categories = [] } = project || {};
      if (categories && categories.length) {
        const cids = categories.map(item => item.id);
        categoryInterfaceList = pick(categoryInterfaceList, cids as readonly number[]) || {};
      }

      // console.log(categoryInterfaceList);

      return Promise.all(
        Object.keys(categoryInterfaceList).map(async (catId: string, catIndex) => {
          const categoryConfig = categories.filter(cat => String(cat.id) === catId)[0] || {};
          // ????????????
          let interfaceList = categoryInterfaceList[catId];
          interfaceList = interfaceList
            .map(interfaceInfo => {
              const { path } = interfaceInfo;
              const { filter } = categoryConfig;
              if (filter) {
                if (filter instanceof RegExp && !filter.test(path)) {
                  return false;
                }
                if (filter instanceof Array && !filter.includes(path)) {
                  return false;
                }
                if (filter instanceof Function && !filter(path)) {
                  return false;
                }
              }
              // ?????? _project ??????
              interfaceInfo._project = omit(projectInfo, ['cats', 'getMockUrl', 'getDevUrl', 'getProdUrl']);
              // ?????????
              const _interfaceInfo = isFunction(preproccessInterface)
                ? preproccessInterface(cloneDeepFast(interfaceInfo), changeCase)
                : interfaceInfo;

              return _interfaceInfo;
            })
            .filter(Boolean) as any;

          const categoryCode: string[] = [];

          const categoryResponseDataJsonSchemaContent: string[] = [];
          const interfaceCodes = await Promise.all(
            interfaceList.map<
              Promise<{
                categoryUID: string;
                outputFilePath: string;
                weights: number[];
                code: string;
                responseDataJsonSchema: string;
              }>
            >(async interfaceInfo => {
              const finalOutputFilePath = path.resolve(
                this.options.cwd,
                // typeof syntheticalConfig.outputFilePath === 'function'
                //   ? syntheticalConfig.outputFilePath(interfaceInfo, changeCase)
                //   : syntheticalConfig.outputFilePath!
                outputFilePath!
              );
              const categoryUID = `${projectIndex}_${catId}_${catIndex}`;
              const { code, responseDataJsonSchema } = await this.generateInterfaceCode(
                {
                  ...this.config,
                  ...project
                },
                interfaceInfo,
                categoryUID
              );
              const weights: number[] = [Number(catId), catIndex];
              categoryCode.push(code);
              categoryResponseDataJsonSchemaContent.push(responseDataJsonSchema);
              return {
                categoryUID,
                outputFilePath: finalOutputFilePath,
                weights,
                code,
                responseDataJsonSchema
              };
            })
          );

          const catOutputFilePath = getOutputFilePath(this.config, `/${projectInfo._id}/${catId}.ts`);

          outputFileList[catOutputFilePath] = {
            projectId: String(projectInfo._id),
            categoryId: catId,
            syntheticalConfig: this.config,
            content: categoryCode,
            outputResponseDataJsonSchemaFilePath: getOutputFilePath(
              this.config,
              `/${projectInfo._id}/${catId}responseDataJsonSchema.ts`
            ),
            responseDataJsonSchemaContent: categoryResponseDataJsonSchemaContent,
            requestFunctionFilePath: this.config.requestFunctionFilePath
              ? path.resolve(this.options.cwd, this.config.requestFunctionFilePath)
              : path.join(path.dirname(catOutputFilePath), 'request.ts'),
            requestHookMakerFilePath: ''
          };
        })
      );
    });
    await Promise.all(projectArrayRender);
    return outputFileList;
  }

  /**
   * ????????????
   * @param outputFileList
   * @returns
   */
  async write(outputFileList: OutputFileList) {
    const JsonSchemaContentList: string[] = [];
    const CategoryList: { categoryId: string; projectId: string }[] = [];
    Object.keys(outputFileList).forEach(filePath => {
      const item = outputFileList[filePath];
      JsonSchemaContentList.push(item.responseDataJsonSchemaContent.join('\n'));
      CategoryList.push(pick(item, ['categoryId', 'projectId']));
    });
    const config = this.config || {};
    // config.getRequestFunctionName;
    // this.requestFunctionNameGen;
    const jsonSchemaEnabled = config.jsonSchema?.enabled;

    // ?????? request.ts
    await GenRequest(config);
    // ???????????? index.ts
    await GenIndex(config, CategoryList);

    return Promise.all(
      Object.keys(outputFileList).map(async outputFilePath => {
        let {
          content,
          requestFunctionFilePath,
          requestHookMakerFilePath,
          syntheticalConfig,
          outputResponseDataJsonSchemaFilePath,
          responseDataJsonSchemaContent
        } = outputFileList[outputFilePath];

        // ?????? .jsx? ??????
        outputFilePath = outputFilePath.replace(/\.js(x)?$/, '.ts$1');
        requestFunctionFilePath = requestFunctionFilePath.replace(/\.js(x)?$/, '.ts$1');
        requestHookMakerFilePath = requestHookMakerFilePath.replace(/\.js(x)?$/, '.ts$1');

        const topImportPkgTemplate = syntheticalConfig.topImportPkgTemplate || defaultTopImportPkgTemplate;

        // ?????????????????????
        const rawOutputContent = dedent`
          ${topNotesContent()}
          ${topImportPkgTemplate(config)}

          ${content.join('\n\n').trim()}
        `;

        const outputContent = formatContent(dedent`${rawOutputContent}`, config.prettierConfigPath);
        await fs.outputFile(outputFilePath, outputContent);

        if (jsonSchemaEnabled) {
          fs.outputFile(
            outputResponseDataJsonSchemaFilePath,
            formatContent(responseDataJsonSchemaContent.join('\n\n'), config.prettierConfigPath)
          );
        }

        // ??????????????? JavaScript ?????????
        // ???????????????????????? tsc ????????????????????????????????????????????????????????????
        // ???????????????????????? .tsx? ?????????
        if (syntheticalConfig.target === 'javascript') {
          await this.tsc(outputFilePath);
          await Promise.all([
            fs.remove(requestFunctionFilePath).catch(noop),
            fs.remove(requestHookMakerFilePath).catch(noop),
            fs.remove(outputFilePath).catch(noop)
          ]);
        }
      })
    );
  }

  async tsc(file: string) {
    return new Promise<void>(resolve => {
      // add this to fix bug that not-generator-file-on-window

      const command = `${os.platform() === 'win32' ? 'node ' : ''}${require.resolve(`typescript/bin/tsc`)}`;

      exec(
        `${command} --target ES2019 --module ESNext --jsx preserve --declaration --esModuleInterop ${file}`,
        {
          cwd: this.options.cwd,
          env: process.env
        },
        () => resolve()
      );
    });
  }

  /** ????????????????????? */
  requestFunctionNameGen(extendedInterfaceInfo: ExtendedInterface): string {
    const path = extendedInterfaceInfo.parsedPath.dir;
    const method = extendedInterfaceInfo.method; // ???????????????path?????????method?????????
    const prefix = [method, ...path.split('/')].join('_');
    return changeCase.camelCase(prefix + extendedInterfaceInfo.parsedPath.name);
  }

  /** ?????????????????? */
  async generateInterfaceCode(syntheticalConfig: SyntheticalConfig, interfaceInfo: Interface, categoryUID: string) {
    const extendedInterfaceInfo: ExtendedInterface = {
      ...interfaceInfo,
      parsedPath: path.parse(interfaceInfo.path)
    };
    const requestFunctionName = isFunction(syntheticalConfig.getRequestFunctionName)
      ? await syntheticalConfig.getRequestFunctionName(extendedInterfaceInfo, changeCase)
      : this.requestFunctionNameGen(extendedInterfaceInfo);
    const requestConfigName = changeCase.camelCase(`${requestFunctionName}RequestConfig`);
    const requestConfigTypeName = changeCase.pascalCase(requestConfigName);
    const requestDataTypeName = isFunction(syntheticalConfig.getRequestDataTypeName)
      ? await syntheticalConfig.getRequestDataTypeName(extendedInterfaceInfo, changeCase)
      : changeCase.pascalCase(`${requestFunctionName}Request`);
    const responseDataTypeName = isFunction(syntheticalConfig.getResponseDataTypeName)
      ? await syntheticalConfig.getResponseDataTypeName(extendedInterfaceInfo, changeCase)
      : changeCase.pascalCase(`${requestFunctionName}Response`);
    const requestDataJsonSchema = getRequestDataJsonSchema(extendedInterfaceInfo);
    // ??????

    const requestDataType = await jsonSchemaToType(requestDataJsonSchema, requestDataTypeName);
    const responseDataJsonSchema = getResponseDataJsonSchema(extendedInterfaceInfo, syntheticalConfig.dataKey);
    // console.log(JSON.stringify(responseDataJsonSchema));
    const responseDataType = await jsonSchemaToType(responseDataJsonSchema, responseDataTypeName);
    const isRequestDataOptional = /(\{\}|any)$/s.test(requestDataType);
    const requestHookName =
      syntheticalConfig.reactHooks && syntheticalConfig.reactHooks.enabled
        ? isFunction(syntheticalConfig.reactHooks.getRequestHookName)
          ? /* istanbul ignore next */
            await syntheticalConfig.reactHooks.getRequestHookName(extendedInterfaceInfo, changeCase)
          : `use${changeCase.pascalCase(requestFunctionName)}`
        : '';

    // ??????????????????
    const paramNames = (extendedInterfaceInfo.req_params /* istanbul ignore next */ || []).map(item => item.name);
    const paramNamesLiteral = JSON.stringify(paramNames);
    const paramNameType = paramNames.length === 0 ? 'string' : `'${paramNames.join("' | '")}'`;

    // ??????????????????
    const queryNames = (extendedInterfaceInfo.req_query /* istanbul ignore next */ || []).map(item => item.name);
    const queryNamesLiteral = JSON.stringify(queryNames);
    const queryNameType = queryNames.length === 0 ? 'string' : `'${queryNames.join("' | '")}'`;

    // ????????????
    const genComment = (genTitle: (title: string) => string) => {
      const {
        enabled: isEnabled = true,
        title: hasTitle = true,
        category: hasCategory = true,
        tag: hasTag = true,
        requestHeader: hasRequestHeader = true,
        updateTime: hasUpdateTime = true,
        link: hasLink = true
      } = {
        ...syntheticalConfig.comment,
        // Swagger ?????????????????????????????????????????????
        ...(syntheticalConfig.serverType === 'swagger'
          ? {
              tag: false,
              updateTime: false,
              link: false
            }
          : {})
      } as CommentConfig;
      if (!isEnabled) {
        return '';
      }
      // ?????????????????? /
      const escapedTitle = String(extendedInterfaceInfo.title).replace(/\//g, '\\/');
      const description = hasLink
        ? `[${escapedTitle}???](${syntheticalConfig.serverUrl}/project/${extendedInterfaceInfo.project_id}/interface/api/${extendedInterfaceInfo._id})`
        : escapedTitle;
      const summary: Array<
        | false
        | {
            label: string;
            value: string | string[];
          }
      > = [
        hasCategory && {
          label: '??????',
          value: hasLink
            ? `[${extendedInterfaceInfo._category.name}???](${syntheticalConfig.serverUrl}/project/${extendedInterfaceInfo.project_id}/interface/api/cat_${extendedInterfaceInfo.catid})`
            : extendedInterfaceInfo._category.name
        },
        hasTag && {
          label: '??????',
          value: extendedInterfaceInfo.tag.map(tag => `\`${tag}\``)
        },
        hasRequestHeader && {
          label: '?????????',
          value: `\`${extendedInterfaceInfo.method.toUpperCase()} ${extendedInterfaceInfo.path}\``
        },
        hasUpdateTime && {
          label: '????????????',
          value: process.env.JEST_WORKER_ID // ??????????????? unix ?????????
            ? String(extendedInterfaceInfo.up_time)
            : /* istanbul ignore next */
              `\`${dayjs(extendedInterfaceInfo.up_time * 1000).format('YYYY-MM-DD HH:mm:ss')}\``
        }
      ];
      const titleComment = hasTitle
        ? dedent`
            * ${genTitle(description)}
            *
          `
        : '';
      const extraComment: string = summary
        .filter(item => typeof item !== 'boolean' && !isEmpty(item.value))
        .map(item => {
          const _item: Exclude<typeof summary[0], boolean> = item as any;
          return `* @${_item.label} ${castArray(_item.value).join(', ')}`;
        })
        .join('\n');
      return dedent`
        /**
         ${[titleComment].filter(Boolean).join('\n')}
         */
      `;
    };
    const requestFunctionTemplate =
      syntheticalConfig.requestFunctionTemplate ||
      (syntheticalConfig.proxyInterface ? adminRequestFunctionTemplate : defaultRequestFunctionTemplate);
    const baseURL = syntheticalConfig.baseURL;
    let baseUrl;
    try {
      baseUrl =
        typeof baseURL === 'string'
          ? baseURL
          : typeof baseURL === 'function'
          ? baseURL(extendedInterfaceInfo.path)
          : '';
    } catch (e) {
      conso.error(e);
    }

    const code = dedent`
      ${genComment(title => `?????? ${title} ??? **????????????**`)}
      ${requestDataType.trim()}

      ${genComment(title => `?????? ${title} ??? **????????????**`)}
      ${responseDataType.trim()}

      ${
        syntheticalConfig.typesOnly
          ? ''
          : dedent`
            ${genComment(title => `?????? ${title} ??? **????????????**`)}
            ${requestFunctionTemplate(
              {
                baseURL: baseUrl,
                requestFunctionName,
                requestDataTypeName,
                responseDataTypeName,
                extendedInterfaceInfo
              },
              syntheticalConfig
            )}

          `
      }
    `;

    return {
      code,
      responseDataJsonSchema: genJsonSchemeConstContent(
        extendedInterfaceInfo.path,
        syntheticalConfig.serverUrl || '',
        extendedInterfaceInfo,
        responseDataJsonSchema
      )
    };
  }

  async destroy() {
    return Promise.all(this.disposes.map(async dispose => dispose()));
  }
}
