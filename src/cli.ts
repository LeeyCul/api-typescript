#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable global-require */
import * as TSNode from 'ts-node';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';
import prompt from 'prompts';
import yargs from 'yargs';
import { Config, ServerConfig } from './types';
import { dedent } from 'vtils';
import { Defined } from 'vtils/types';
import { Generator } from './Generator';
import { Generator as GitRepoGenertor } from './GitRepoGenerator';
import yargsParser from 'yargs-parser';
import { packageCheck } from './dependenciesHandler';
import chalk from 'chalk';
import * as conso from './console';
import { formatContent } from './utils';

TSNode.register({
  // 不加载本地的 tsconfig.json
  skipProject: true,
  // 仅转译，不做类型检查
  transpileOnly: true,
  // 自定义编译选项
  compilerOptions: {
    strict: false,
    target: 'es2017',
    module: 'commonjs',
    moduleResolution: 'node',
    declaration: false,
    removeComments: false,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    importHelpers: false,
    // 转换 js，支持在 apits.config.js 里使用最新语法
    allowJs: true,
    lib: ['es2017']
  }
});
interface OptionsType {
  configFile?: string;
}

export async function getConfig(options?: OptionsType) {
  let useCustomConfigFile = false;
  let cwd!: string;
  let configTSFile!: string;
  let configJSFile!: string;
  let configFile!: string;
  let configFileExist!: boolean;

  if (!options?.configFile) {
    cwd = process.cwd();
    configTSFile = path.join(cwd, 'apits.config.ts');
    configJSFile = path.join(cwd, 'apits.config.js');
    const configTSFileExist = await fs.pathExists(configTSFile);
    const configJSFileExist = !configTSFileExist && (await fs.pathExists(configJSFile));
    configFileExist = configTSFileExist || configJSFileExist;
    configFile = configTSFileExist ? configTSFile : configJSFile;
  } else {
    useCustomConfigFile = true;
    configFile = options.configFile;
    cwd = path.dirname(configFile);
    configFileExist = await fs.pathExists(configFile);
  }

  return {
    cwd,
    configFileExist,
    useCustomConfigFile,
    configFile,
    configTSFile,
    configJSFile
  };
}

export async function genConfig(options: OptionsType) {
  const { configFileExist, useCustomConfigFile, configFile, configJSFile, configTSFile } = await getConfig(options);
  if (configFileExist) {
    conso.info(`检测到配置文件: ${configFile}`);
    const answers = await prompt({
      message: '是否覆盖已有配置文件?',
      name: 'override',
      type: 'confirm'
    });
    if (!answers.override) return;
  }
  let outputConfigFile!: string;
  let outputConfigFileType!: 'ts' | 'js';
  if (useCustomConfigFile) {
    outputConfigFile = configFile;
    outputConfigFileType = configFile.endsWith('.js') ? 'js' : 'ts';
  } else {
    const answers = await prompt({
      message: '选择配置文件类型?',
      name: 'configFileType',
      type: 'select',
      choices: [
        { title: 'TypeScript(apits.config.ts)', value: 'ts' },
        { title: 'JavaScript(apits.config.js)', value: 'js' }
      ]
    });
    outputConfigFile = answers.configFileType === 'js' ? configJSFile : configTSFile;
    outputConfigFileType = answers.configFileType;
  }

  const serverTypeAnswers = await prompt({
    message: '选择获取接口信息的类型',
    name: 'serverType',
    type: 'select',
    choices: [
      { title: 'Yapi', value: 'yapi' },
      // { title: 'GitRepo', value: 'git-repo' },
      { title: 'Swagger', value: 'swagger' }
    ]
  });
  let yapiAnswers;
  if (serverTypeAnswers.serverType === 'yapi') {
    yapiAnswers = await prompt([
      {
        message: `yapi项目token`,
        name: 'token',
        type: 'text',
        initial: ''
      },
      {
        message: '接口信息服务地址',
        name: 'url',
        type: 'text',
        initial: 'http://yapi.com/'
      }
    ]);
  }
  let swaggerAnswers;
  if (serverTypeAnswers.serverType === 'swagger') {
    swaggerAnswers = await prompt([
      {
        message: '接口信息服务地址',
        name: 'url',
        type: 'text',
        initial: ''
      }
    ]);
  }
  let gitRepoAnswers;
  // if (serverTypeAnswers.serverType === 'git-repo') {
  //   gitRepoAnswers = await prompt([
  //     {
  //       message: '仓库地址(SSH协议)',
  //       name: 'repository',
  //       type: 'text',
  //       initial: 'medgit@git.com:foundations/api-swagger.git'
  //     },
  //     {
  //       message: '使用的分支名',
  //       name: 'branch',
  //       type: 'text',
  //       initial: 'master'
  //     }
  //   ]);
  // }

  await fs.outputFile(
    outputConfigFile,
    formatContent(dedent`
      import { defineConfig } from 'api-swagger'

      export default defineConfig({
        serverType: '${serverTypeAnswers.serverType}',
        ${
          serverTypeAnswers.serverType !== 'git-repo'
            ? `serverUrl: '${yapiAnswers?.url || swaggerAnswers?.url || ''}',`
            : ''
        }
        ${
          serverTypeAnswers.serverType === 'yapi'
            ? `projects: {
          token: '${yapiAnswers?.token}' // yapi项目的token
        },`
            : ''
        }
        outputFilePath: 'src/api'
      })
    `)
  );
  conso.success('写入配置文件完毕');
}

export async function start(options?: { configFile?: string }) {
  const { cwd, configFileExist, useCustomConfigFile, configFile, configJSFile, configTSFile } = await getConfig(
    options
  );

  if (!configFileExist) {
    return conso.error(`找不到配置文件: ${useCustomConfigFile ? configFile : `${configTSFile} 或 ${configJSFile}`}`);
  }
  conso.tips(`找到配置文件: ${configFile}`);
  let generator: Generator | undefined;
  let spinner: ora.Ora | undefined;
  try {
    const config: Config = require(configFile).default;
    const { defaultRequestLib = false, topImportPkgTemplate, outputFilePath } = config;
    if (defaultRequestLib === false && typeof topImportPkgTemplate !== 'function') {
      conso.error(
        `已配置不使用默认请求库，请通过topImportPkgTemplate配置使用的依赖库 \n 示例：${chalk.cyan(
          "()=>`import request from '../request'`"
        )}`
      );
      return false;
    }

    spinner = ora('正在获取数据并生成代码... \n').start();
    const { serverType, gitRepoSettings } = config;
    if (serverType === 'git-repo' && GitRepoGenertor.configValidator(config)) {
      const gitRepoGenertorInstance = new GitRepoGenertor(config, { cwd });
      const output = await gitRepoGenertorInstance.generate();
      await gitRepoGenertorInstance.write(output);
      const outTips = Object.keys(output).length ? `代码生成成功，文件路径：${outputFilePath}` : `未找到需要更新的接口`;
      spinner.succeed(outTips);
    } else {
      generator = new Generator(config, { cwd });
      await generator.prepare();
      const output = await generator.generate();
      await generator.write(output);
      spinner.succeed(`代码生成成功，文件路径：${outputFilePath}`);
      await generator.destroy();
    }

    // 如果不是只需要类型声明，则需要检测基础请求库是否安装
    // if (!config.typesOnly && defaultRequestLib) {
    //   await packageCheck('@medlinker/med-request');
    // }

    // 是否启用拦截器，拦截器由使用到change-case
    if (config.jsonSchema?.enabled) {
      await packageCheck('change-case');
    }
  } catch (err) {
    spinner?.stop();
    if (generator) await generator?.destroy();
    /* istanbul ignore next */
    return conso.error(err);
  }

  console.timeEnd();
  return null;
}

export default class CLI {
  argvs: any;

  run(args: any, callback?: yargs.ParseCallback) {
    this.argvs = yargsParser(args);

    const cli = this.init();

    if (args.length === 0) {
      cli.showHelp();
    }
    return cli.parse(args);
  }

  init() {
    return yargs
      .scriptName('apits')
      .usage('Usage: $0 <command> [options]')
      .command<any>(
        'gen',
        '生成接口类型声明和方法',
        y => {},
        (argv: any) => {
          const {} = argv;
          start();
        }
      )
      .command<any>(
        'init',
        '生成配置文件',
        y => {},
        (argv: any) => {
          const {} = argv;
          genConfig({});
        }
      )
      .help();
  }
}
