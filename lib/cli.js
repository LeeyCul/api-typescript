#!/usr/bin/env node
"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.genConfig = exports.getConfig = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable class-methods-use-this */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-empty-pattern */

/* eslint-disable global-require */

var TSNode = __importStar(require("ts-node"));

var fs_extra_1 = __importDefault(require("fs-extra"));

var ora_1 = __importDefault(require("ora"));

var path_1 = __importDefault(require("path"));

var prompts_1 = __importDefault(require("prompts"));

var yargs_1 = __importDefault(require("yargs"));

var vtils_1 = require("vtils");

var Generator_1 = require("./Generator");

var GitRepoGenerator_1 = require("./GitRepoGenerator");

var yargs_parser_1 = __importDefault(require("yargs-parser"));

var dependenciesHandler_1 = require("./dependenciesHandler");

var chalk_1 = __importDefault(require("chalk"));

var conso = __importStar(require("./console"));

var utils_1 = require("./utils");

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

function getConfig(options) {
  return __awaiter(this, void 0, void 0, function () {
    var useCustomConfigFile, cwd, configTSFile, configJSFile, configFile, configFileExist, configTSFileExist, configJSFileExist, _a;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          useCustomConfigFile = false;
          if (!!(options === null || options === void 0 ? void 0 : options.configFile)) return [3
          /*break*/
          , 4];
          cwd = process.cwd();
          configTSFile = path_1.default.join(cwd, 'apits.config.ts');
          configJSFile = path_1.default.join(cwd, 'apits.config.js');
          return [4
          /*yield*/
          , fs_extra_1.default.pathExists(configTSFile)];

        case 1:
          configTSFileExist = _b.sent();
          _a = !configTSFileExist;
          if (!_a) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , fs_extra_1.default.pathExists(configJSFile)];

        case 2:
          _a = _b.sent();
          _b.label = 3;

        case 3:
          configJSFileExist = _a;
          configFileExist = configTSFileExist || configJSFileExist;
          configFile = configTSFileExist ? configTSFile : configJSFile;
          return [3
          /*break*/
          , 6];

        case 4:
          useCustomConfigFile = true;
          configFile = options.configFile;
          cwd = path_1.default.dirname(configFile);
          return [4
          /*yield*/
          , fs_extra_1.default.pathExists(configFile)];

        case 5:
          configFileExist = _b.sent();
          _b.label = 6;

        case 6:
          return [2
          /*return*/
          , {
            cwd: cwd,
            configFileExist: configFileExist,
            useCustomConfigFile: useCustomConfigFile,
            configFile: configFile,
            configTSFile: configTSFile,
            configJSFile: configJSFile
          }];
      }
    });
  });
}

exports.getConfig = getConfig;

function genConfig(options) {
  return __awaiter(this, void 0, void 0, function () {
    var _a, configFileExist, useCustomConfigFile, configFile, configJSFile, configTSFile, answers, outputConfigFile, outputConfigFileType, answers, serverTypeAnswers, yapiAnswers, swaggerAnswers, gitRepoAnswers;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , getConfig(options)];

        case 1:
          _a = _b.sent(), configFileExist = _a.configFileExist, useCustomConfigFile = _a.useCustomConfigFile, configFile = _a.configFile, configJSFile = _a.configJSFile, configTSFile = _a.configTSFile;
          if (!configFileExist) return [3
          /*break*/
          , 3];
          conso.info("\u68C0\u6D4B\u5230\u914D\u7F6E\u6587\u4EF6: ".concat(configFile));
          return [4
          /*yield*/
          , (0, prompts_1.default)({
            message: '是否覆盖已有配置文件?',
            name: 'override',
            type: 'confirm'
          })];

        case 2:
          answers = _b.sent();
          if (!answers.override) return [2
          /*return*/
          ];
          _b.label = 3;

        case 3:
          if (!useCustomConfigFile) return [3
          /*break*/
          , 4];
          outputConfigFile = configFile;
          outputConfigFileType = configFile.endsWith('.js') ? 'js' : 'ts';
          return [3
          /*break*/
          , 6];

        case 4:
          return [4
          /*yield*/
          , (0, prompts_1.default)({
            message: '选择配置文件类型?',
            name: 'configFileType',
            type: 'select',
            choices: [{
              title: 'TypeScript(apits.config.ts)',
              value: 'ts'
            }, {
              title: 'JavaScript(apits.config.js)',
              value: 'js'
            }]
          })];

        case 5:
          answers = _b.sent();
          outputConfigFile = answers.configFileType === 'js' ? configJSFile : configTSFile;
          outputConfigFileType = answers.configFileType;
          _b.label = 6;

        case 6:
          return [4
          /*yield*/
          , (0, prompts_1.default)({
            message: '选择获取接口信息的类型',
            name: 'serverType',
            type: 'select',
            choices: [{
              title: 'Yapi',
              value: 'yapi'
            }, // { title: 'GitRepo', value: 'git-repo' },
            {
              title: 'Swagger',
              value: 'swagger'
            }]
          })];

        case 7:
          serverTypeAnswers = _b.sent();
          if (!(serverTypeAnswers.serverType === 'yapi')) return [3
          /*break*/
          , 9];
          return [4
          /*yield*/
          , (0, prompts_1.default)([{
            message: "yapi\u9879\u76EEtoken",
            name: 'token',
            type: 'text',
            initial: ''
          }, {
            message: '接口信息服务地址',
            name: 'url',
            type: 'text',
            initial: 'http://yapi.int.medlinker.com/'
          }])];

        case 8:
          yapiAnswers = _b.sent();
          _b.label = 9;

        case 9:
          if (!(serverTypeAnswers.serverType === 'swagger')) return [3
          /*break*/
          , 11];
          return [4
          /*yield*/
          , (0, prompts_1.default)([{
            message: '接口信息服务地址',
            name: 'url',
            type: 'text',
            initial: ''
          }])];

        case 10:
          swaggerAnswers = _b.sent();
          _b.label = 11;

        case 11:
          // if (serverTypeAnswers.serverType === 'git-repo') {
          //   gitRepoAnswers = await prompt([
          //     {
          //       message: '仓库地址(SSH协议)',
          //       name: 'repository',
          //       type: 'text',
          //       initial: 'medgit@git.medlinker.com:foundations/api-swagger.git'
          //     },
          //     {
          //       message: '使用的分支名',
          //       name: 'branch',
          //       type: 'text',
          //       initial: 'master'
          //     }
          //   ]);
          // }
          return [4
          /*yield*/
          , fs_extra_1.default.outputFile(outputConfigFile, (0, utils_1.formatContent)((0, vtils_1.dedent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      import { defineConfig } from 'api-swagger'\n\n      export default defineConfig({\n        serverType: '", "',\n        ", "\n        ", "\n        outputFilePath: 'src/api'\n      })\n    "], ["\n      import { defineConfig } from 'api-swagger'\n\n      export default defineConfig({\n        serverType: '", "',\n        ", "\n        ", "\n        outputFilePath: 'src/api'\n      })\n    "])), serverTypeAnswers.serverType, serverTypeAnswers.serverType !== 'git-repo' ? "serverUrl: '".concat((yapiAnswers === null || yapiAnswers === void 0 ? void 0 : yapiAnswers.url) || (swaggerAnswers === null || swaggerAnswers === void 0 ? void 0 : swaggerAnswers.url) || '', "',") : '', serverTypeAnswers.serverType === 'yapi' ? "projects: {\n          token: '".concat(yapiAnswers === null || yapiAnswers === void 0 ? void 0 : yapiAnswers.token, "' // yapi\u9879\u76EE\u7684token\n        },") : '')))];

        case 12:
          // if (serverTypeAnswers.serverType === 'git-repo') {
          //   gitRepoAnswers = await prompt([
          //     {
          //       message: '仓库地址(SSH协议)',
          //       name: 'repository',
          //       type: 'text',
          //       initial: 'medgit@git.medlinker.com:foundations/api-swagger.git'
          //     },
          //     {
          //       message: '使用的分支名',
          //       name: 'branch',
          //       type: 'text',
          //       initial: 'master'
          //     }
          //   ]);
          // }
          _b.sent();

          conso.success('写入配置文件完毕');
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.genConfig = genConfig;

function start(options) {
  var _a;

  return __awaiter(this, void 0, void 0, function () {
    var _b, cwd, configFileExist, useCustomConfigFile, configFile, configJSFile, configTSFile, generator, spinner, config, _c, defaultRequestLib, topImportPkgTemplate, outputFilePath, serverType, gitRepoSettings, gitRepoGenertorInstance, output, outTips, output, err_1;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          return [4
          /*yield*/
          , getConfig(options)];

        case 1:
          _b = _d.sent(), cwd = _b.cwd, configFileExist = _b.configFileExist, useCustomConfigFile = _b.useCustomConfigFile, configFile = _b.configFile, configJSFile = _b.configJSFile, configTSFile = _b.configTSFile;

          if (!configFileExist) {
            return [2
            /*return*/
            , conso.error("\u627E\u4E0D\u5230\u914D\u7F6E\u6587\u4EF6: ".concat(useCustomConfigFile ? configFile : "".concat(configTSFile, " \u6216 ").concat(configJSFile)))];
          }

          conso.tips("\u627E\u5230\u914D\u7F6E\u6587\u4EF6: ".concat(configFile));
          _d.label = 2;

        case 2:
          _d.trys.push([2, 13,, 16]);

          config = require(configFile).default;
          _c = config.defaultRequestLib, defaultRequestLib = _c === void 0 ? false : _c, topImportPkgTemplate = config.topImportPkgTemplate, outputFilePath = config.outputFilePath;

          if (defaultRequestLib === false && typeof topImportPkgTemplate !== 'function') {
            conso.error("\u5DF2\u914D\u7F6E\u4E0D\u4F7F\u7528\u9ED8\u8BA4\u8BF7\u6C42\u5E93\uFF0C\u8BF7\u901A\u8FC7topImportPkgTemplate\u914D\u7F6E\u4F7F\u7528\u7684\u4F9D\u8D56\u5E93 \n \u793A\u4F8B\uFF1A".concat(chalk_1.default.cyan("()=>`import request from '../request'`")));
            return [2
            /*return*/
            , false];
          }

          spinner = (0, ora_1.default)('正在获取数据并生成代码... \n').start();
          serverType = config.serverType, gitRepoSettings = config.gitRepoSettings;
          if (!(serverType === 'git-repo' && GitRepoGenerator_1.Generator.configValidator(config))) return [3
          /*break*/
          , 5];
          gitRepoGenertorInstance = new GitRepoGenerator_1.Generator(config, {
            cwd: cwd
          });
          return [4
          /*yield*/
          , gitRepoGenertorInstance.generate()];

        case 3:
          output = _d.sent();
          return [4
          /*yield*/
          , gitRepoGenertorInstance.write(output)];

        case 4:
          _d.sent();

          outTips = Object.keys(output).length ? "\u4EE3\u7801\u751F\u6210\u6210\u529F\uFF0C\u6587\u4EF6\u8DEF\u5F84\uFF1A".concat(outputFilePath) : "\u672A\u627E\u5230\u9700\u8981\u66F4\u65B0\u7684\u63A5\u53E3";
          spinner.succeed(outTips);
          return [3
          /*break*/
          , 10];

        case 5:
          generator = new Generator_1.Generator(config, {
            cwd: cwd
          });
          return [4
          /*yield*/
          , generator.prepare()];

        case 6:
          _d.sent();

          return [4
          /*yield*/
          , generator.generate()];

        case 7:
          output = _d.sent();
          return [4
          /*yield*/
          , generator.write(output)];

        case 8:
          _d.sent();

          spinner.succeed("\u4EE3\u7801\u751F\u6210\u6210\u529F\uFF0C\u6587\u4EF6\u8DEF\u5F84\uFF1A".concat(outputFilePath));
          return [4
          /*yield*/
          , generator.destroy()];

        case 9:
          _d.sent();

          _d.label = 10;

        case 10:
          if (!((_a = config.jsonSchema) === null || _a === void 0 ? void 0 : _a.enabled)) return [3
          /*break*/
          , 12];
          return [4
          /*yield*/
          , (0, dependenciesHandler_1.packageCheck)('change-case')];

        case 11:
          _d.sent();

          _d.label = 12;

        case 12:
          return [3
          /*break*/
          , 16];

        case 13:
          err_1 = _d.sent();
          spinner === null || spinner === void 0 ? void 0 : spinner.stop();
          if (!generator) return [3
          /*break*/
          , 15];
          return [4
          /*yield*/
          , generator === null || generator === void 0 ? void 0 : generator.destroy()];

        case 14:
          _d.sent();

          _d.label = 15;

        case 15:
          /* istanbul ignore next */
          return [2
          /*return*/
          , conso.error(err_1)];

        case 16:
          console.timeEnd();
          return [2
          /*return*/
          , null];
      }
    });
  });
}

exports.start = start;

var CLI =
/** @class */
function () {
  function CLI() {}

  CLI.prototype.run = function (args, callback) {
    this.argvs = (0, yargs_parser_1.default)(args);
    var cli = this.init();

    if (args.length === 0) {
      cli.showHelp();
    }

    return cli.parse(args);
  };

  CLI.prototype.init = function () {
    return yargs_1.default.scriptName('apits').usage('Usage: $0 <command> [options]').command('gen', '生成接口类型声明和方法', function (y) {}, function (argv) {
      var _a = argv;
      start();
    }).command('init', '生成配置文件', function (y) {}, function (argv) {
      var _a = argv;
      genConfig({});
    }).help();
  };

  return CLI;
}();

exports.default = CLI;
var templateObject_1;