/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import fs from 'fs-extra';
import { dedent } from 'vtils';
import { Config } from './types';
import { getOutputFilePath } from './getOutputPath';
import { formatContent, topNotesContent } from './utils';
import * as conso from './console';

export default async (config: Config) => {
  const { prettierConfigPath, defaultRequestLib = false, outputFilePath } = config;
  if (defaultRequestLib === false) return;
  const rawRequestFunctionFilePath = getOutputFilePath(config, 'request.ts');
  if (!config.typesOnly) {
    if (await fs.pathExists(rawRequestFunctionFilePath)) {
      conso.tips(`输出目录${outputFilePath}下检测到已有request.ts，如果需要重新生成，请删除该文件 \n`);
      return;
    }
  }

  const inspector = config.jsonSchema?.enabled;

  const content = `
  ${topNotesContent()}

  import request from 'axios';
  ${inspector ? "import * as jsonScheme from './responseDataJsonSchema'" : ''}


  const instance = request.create({
    withCredentials: true,
    baseURL: process.env.MED_API_HOST,
  });

  // 自定义request拦截器
  instance.interceptor.req((config) => {
    return  {
      ...config
    }
  });

  // 自定义response拦截器，
  // 注意：如果修改接口正常返回的结构，对应的response声明需要修改
  instance.interceptor.res((r) => {
    const { data, config } = r;
    if (data.errcode === 0 || data.code === 0) {
      ${
        inspector
          ? `try{
        jsonScheme.runner(config.url,data.data,jsonScheme)
      }catch(e){
        console.log(e)
      }`
          : ''
      }

      return data.data;
    }
    return Promise.reject(data);
  });

  // 自定义异常拦截器
  instance.interceptor.error((error) => {
    const { response, config } = error;
    return Promise.reject(error);
  });

  export default instance;
`;

  fs.outputFile(rawRequestFunctionFilePath, formatContent(dedent`${content}`, prettierConfigPath));
};
