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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
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

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Generator = void 0;
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

var changeCase = __importStar(require("change-case"));

var fs_extra_1 = __importDefault(require("fs-extra"));

var path_1 = __importDefault(require("path"));

var os_1 = __importDefault(require("os"));

var downloadGitRepo_1 = require("./downloadGitRepo");

var swaggerJsonToYApiData_1 = require("./swaggerJsonToYApiData");

var GitRepoInfo_1 = __importDefault(require("./GitRepoInfo"));

var conso = __importStar(require("./console"));

var vtils_1 = require("vtils");

var rimraf_1 = __importDefault(require("rimraf"));

var child_process_1 = require("child_process");

var utils_1 = require("./utils");

var genRequest_1 = __importDefault(require("./genRequest"));

var genIndex_1 = require("./genIndex");

var responseDataJsonSchemaHandler_1 = require("./responseDataJsonSchemaHandler");

var getOutputPath_1 = require("./getOutputPath"); // 默认顶部依赖生成模板


function defaultTopImportPkgTemplate(config, filePath) {
  var defaultRequestLib = config.defaultRequestLib,
      _a = config.outputFilePath,
      outputFilePath = _a === void 0 ? 'src/api' : _a;
  var relative = path_1.default.relative(filePath.replace(/\/[^/]+$/, ''), outputFilePath);
  return !defaultRequestLib ? "import request from '".concat(relative, "/request'") : '';
}

var getDataKeySetStr = function getDataKeySetStr(method) {
  if (['head', 'option', 'get'].includes(method.toLowerCase())) {
    return 'params: data';
  }

  return 'data';
}; // 默认请求函数体生成模板


function defaultRequestFunctionTemplate(props) {
  var baseURL = props.baseURL,
      requestFunctionName = props.requestFunctionName,
      requestDataTypeName = props.requestDataTypeName,
      responseDataTypeName = props.responseDataTypeName,
      extendedInterfaceInfo = props.extendedInterfaceInfo;
  var req_params = extendedInterfaceInfo.req_params,
      req_query = extendedInterfaceInfo.req_query;
  var hasData = req_params.length || req_query.length;
  var method = extendedInterfaceInfo.method.toLowerCase();
  var finalBaseUrl;

  if (baseURL === null || baseURL === void 0 ? void 0 : baseURL.match(/^\[code\]:/)) {
    // 如果使用[code]开头则表示，作为代码段执行，否则仅作为字符串
    finalBaseUrl = baseURL.replace(/^\[code\]:/, '');
  } else if (baseURL) {
    finalBaseUrl = "\"".concat(baseURL, "\"");
  }

  return "export const ".concat(requestFunctionName, " = (data").concat(hasData ? '' : '?', ": ").concat(requestDataTypeName, ") => {\n    return request.").concat(method, "<").concat(requestDataTypeName, ",").concat(responseDataTypeName, ">(").concat(JSON.stringify(extendedInterfaceInfo.path), ", {\n      ").concat(getDataKeySetStr(method), ",\n      ").concat(finalBaseUrl ? "baseURL: ".concat(finalBaseUrl) : '', "\n    })\n  }");
} // 后台统一网关函数体生成模板


function adminRequestFunctionTemplate(props, config) {
  var _a;

  var baseURL = props.baseURL,
      requestFunctionName = props.requestFunctionName,
      requestDataTypeName = props.requestDataTypeName,
      responseDataTypeName = props.responseDataTypeName,
      extendedInterfaceInfo = props.extendedInterfaceInfo;
  var req_params = extendedInterfaceInfo.req_params,
      req_query = extendedInterfaceInfo.req_query;
  var hasData = req_params.length || req_query.length;
  var finalBaseUrl = '';

  if (baseURL === null || baseURL === void 0 ? void 0 : baseURL.match(/^\[code\]:/)) {
    // 如果使用[code]开头则表示，作为代码段执行，否则仅作为字符串
    finalBaseUrl = baseURL.replace(/^\[code\]:/, '');
  } else {
    finalBaseUrl = "\"".concat(baseURL, "\"");
  }

  var url = ((_a = config === null || config === void 0 ? void 0 : config.proxyInterface) === null || _a === void 0 ? void 0 : _a.path) || '/admin-interface/proxy/v0/proxy';
  return "export const ".concat(requestFunctionName, " = (data").concat(hasData ? '' : '?', ": ").concat(requestDataTypeName, ") => {\n    return request.post<").concat(requestDataTypeName, ",").concat(responseDataTypeName, ">( '").concat(url, "', {\n      data:{\n        real_url: '").concat(extendedInterfaceInfo.path, "',\n        params: JSON.stringify(data)\n      },\n      ").concat(baseURL ? "baseURL: ".concat(finalBaseUrl) : '', "\n    })\n  }");
}

var Generator =
/** @class */
function () {
  function Generator(config, options) {
    if (options === void 0) {
      options = {
        cwd: process.cwd()
      };
    }

    this.options = options;
    this.disposes = [];
    this.config = config;
  }

  Generator.configValidator = function (config) {
    var gitRepoSettings = config.gitRepoSettings;
    var repository = (gitRepoSettings || {}).repository;

    if (!repository) {
      conso.error("gitRepoSettings\u53C2\u6570\u672A\u8BBE\u7F6E\u4ED3\u5E93\u94FE\u63A5repository");
      return false;
    }

    return true;
  };
  /**
   * 读取json文件内容
   * @param filePath
   * @returns
   */


  Generator.prototype.readJson = function (filePath) {
    return __awaiter(this, void 0, void 0, function () {
      var json, interfaces;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(filePath && filePath.match(/\.json$/))) return [3
            /*break*/
            , 2];
            json = fs_extra_1.default.readJSONSync(filePath);
            return [4
            /*yield*/
            , (0, swaggerJsonToYApiData_1.swaggerJsonToYApiData)(json)];

          case 1:
            interfaces = _a.sent().interfaces;
            return [2
            /*return*/
            , interfaces];

          case 2:
            return [2
            /*return*/
            , []];
        }
      });
    });
  };
  /**
   * 获取更新了的文件列表
   */


  Generator.prototype.getUpdatedFiles = function () {
    return __awaiter(this, void 0, void 0, function () {
      var gitRepoSettings, commitId, _a, renderPaths, jsonFileDir, fFiles, _b, changed, files, changedFiles_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            gitRepoSettings = this.config.gitRepoSettings;
            commitId = (0, genIndex_1.getIndexGitInfo)(this.config).commitId;
            return [4
            /*yield*/
            , (0, downloadGitRepo_1.start)(gitRepoSettings)];

          case 1:
            _a = _c.sent(), renderPaths = _a.renderPaths, jsonFileDir = _a.jsonFileDir;
            this.gitRepoInfo = new GitRepoInfo_1.default({
              gitRepoPath: jsonFileDir
            });
            fFiles = renderPaths;
            if (!(commitId && !(gitRepoSettings === null || gitRepoSettings === void 0 ? void 0 : gitRepoSettings.fullUpdate))) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , this.gitRepoInfo.diffSummary(commitId)];

          case 2:
            _b = _c.sent(), changed = _b.changed, files = _b.files;
            changedFiles_1 = [];
            fFiles = files.filter(function (item) {
              var jsonFilePath = path_1.default.join(jsonFileDir, item.file);
              return item.file.match(/.json$/) && fs_extra_1.default.existsSync(jsonFilePath);
            }).map(function (item) {
              var jsonFilePath = path_1.default.join(jsonFileDir, item.file);

              var _a = path_1.default.parse(item.file),
                  ext = _a.ext,
                  name = _a.name,
                  base = _a.base,
                  dir = _a.dir;

              changedFiles_1.push(item.file);
              var fname = name.replace(/\.swagger$/, '');
              return {
                name: fname,
                dir: dir,
                base: base,
                outPath: path_1.default.join(dir, fname),
                jsonFilePath: jsonFilePath
              };
            });

            if (changed > 0) {
              conso.info("\u53D1\u73B0".concat(changed, "\u5904\u66F4\u65B0\uFF0C\u53D8\u66F4\u6587\u4EF6\u5982\u4E0B\u8868"));
              conso.table(files);
            }

            _c.label = 3;

          case 3:
            return [2
            /*return*/
            , fFiles];
        }
      });
    });
  };
  /**
   * 生成代码
   * @returns
   */


  Generator.prototype.generate = function () {
    return __awaiter(this, void 0, void 0, function () {
      var outputFileList, filesList, _a, filter, baseURL;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            outputFileList = Object.create(null);
            return [4
            /*yield*/
            , this.getUpdatedFiles()];

          case 1:
            filesList = _b.sent();
            _a = this.config.gitRepoSettings || {}, filter = _a.filter, baseURL = _a.baseURL;
            return [4
            /*yield*/
            , Promise.all(filesList.map(function (item) {
              return __awaiter(_this, void 0, void 0, function () {
                var jsonFilePath, name, outPath, writePath, interfaces, filtedInterfaces, codes;

                var _this = this;

                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      jsonFilePath = item.jsonFilePath, name = item.name, outPath = item.outPath;
                      writePath = (0, getOutputPath_1.getOutputFilePath)(this.config, outPath);
                      return [4
                      /*yield*/
                      , this.readJson(jsonFilePath)];

                    case 1:
                      interfaces = _a.sent();
                      filtedInterfaces = interfaces.filter(function (item) {
                        if (filter instanceof RegExp) {
                          return filter.test(item.path);
                        }

                        if (filter instanceof Array) {
                          return filter.includes(item.path);
                        }

                        if (filter instanceof Function) {
                          return filter(item.path);
                        }

                        return true;
                      });
                      return [4
                      /*yield*/
                      , Promise.all(filtedInterfaces.map(function (interfaceItem) {
                        return __awaiter(_this, void 0, void 0, function () {
                          var code;
                          return __generator(this, function (_a) {
                            switch (_a.label) {
                              case 0:
                                return [4
                                /*yield*/
                                , this.generateInterfaceCode(__assign({}, this.config), interfaceItem)];

                              case 1:
                                code = _a.sent().code;
                                return [2
                                /*return*/
                                , code];
                            }
                          });
                        });
                      }))];

                    case 2:
                      codes = _a.sent();

                      if (codes && codes.length) {
                        outputFileList[writePath] = {
                          syntheticalConfig: this.config,
                          content: codes,
                          outPath: outPath
                        };
                      }

                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }))];

          case 2:
            _b.sent();

            return [2
            /*return*/
            , outputFileList];
        }
      });
    });
  };
  /**
   * 写入文件
   * @param outputFileList
   * @returns
   */


  Generator.prototype.write = function (outputFileList) {
    return __awaiter(this, void 0, void 0, function () {
      var filePathList, config, interfacePathList, notes;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            filePathList = Object.keys(outputFileList);
            config = this.config || {};

            if (!outputFileList || filePathList.length === 0) {
              return [2
              /*return*/
              , Promise.resolve([])];
            }

            interfacePathList = filePathList.map(function (fp) {
              return outputFileList[fp].outPath;
            }); // 生成 request.ts

            return [4
            /*yield*/
            , (0, genRequest_1.default)(config)];

          case 1:
            // 生成 request.ts
            _a.sent();

            if (!this.gitRepoInfo) {
              conso.error('未获取到git信息');
              return [2
              /*return*/
              , Promise.reject(new Error('未获取到git信息'))];
            }

            return [4
            /*yield*/
            , this.gitRepoInfo.gitNotesContent()];

          case 2:
            notes = _a.sent(); // 生成入口 index.ts

            return [4
            /*yield*/
            , (0, genIndex_1.genGitRepoIndex)(config, interfacePathList, notes)];

          case 3:
            // 生成入口 index.ts
            _a.sent();

            return [2
            /*return*/
            , Promise.all(filePathList.map(function (outputFilePath) {
              return __awaiter(_this, void 0, void 0, function () {
                var _a, content, syntheticalConfig, topImportPkgTemplate, rawOutputContent, outputContent;

                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      _a = outputFileList[outputFilePath], content = _a.content, syntheticalConfig = _a.syntheticalConfig;
                      topImportPkgTemplate = syntheticalConfig.topImportPkgTemplate || defaultTopImportPkgTemplate;
                      rawOutputContent = (0, vtils_1.dedent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          ", "\n          ", "\n\n          ", "\n        "], ["\n          ", "\n          ", "\n\n          ", "\n        "])), (0, utils_1.topNotesContent)(), topImportPkgTemplate(config, outputFilePath), content.join('\n\n').trim());
                      outputContent = (0, utils_1.formatContent)((0, vtils_1.dedent)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), rawOutputContent), config.prettierConfigPath);
                      return [4
                      /*yield*/
                      , fs_extra_1.default.outputFile(path_1.default.join(process.cwd(), "".concat(outputFilePath, ".ts")), outputContent)];

                    case 1:
                      _b.sent();

                      if (!(syntheticalConfig.target === 'javascript')) return [3
                      /*break*/
                      , 4];
                      return [4
                      /*yield*/
                      , this.tsc(outputFilePath)];

                    case 2:
                      _b.sent();

                      return [4
                      /*yield*/
                      , Promise.all([fs_extra_1.default.remove(outputFilePath).catch(vtils_1.noop)])];

                    case 3:
                      _b.sent();

                      _b.label = 4;

                    case 4:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }))];
        }
      });
    });
  };

  Generator.prototype.tsc = function (file) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve) {
          // add this to fix bug that not-generator-file-on-window
          var command = "".concat(os_1.default.platform() === 'win32' ? 'node ' : '').concat(require.resolve("typescript/bin/tsc"));
          (0, child_process_1.exec)("".concat(command, " --target ES2019 --module ESNext --jsx preserve --declaration --esModuleInterop ").concat(file), {
            cwd: _this.options.cwd,
            env: process.env
          }, function () {
            return resolve();
          });
        })];
      });
    });
  };
  /** 请求函数名生成 */


  Generator.prototype.requestFunctionNameGen = function (extendedInterfaceInfo) {
    var path = extendedInterfaceInfo.parsedPath.dir;
    var method = extendedInterfaceInfo.method; // 可能存在同path，不同method的用法

    var prefix = __spreadArray([method], path.split('/'), true).join('_');

    return changeCase.camelCase(prefix + extendedInterfaceInfo.parsedPath.name);
  };
  /** 生成接口代码 */


  Generator.prototype.generateInterfaceCode = function (syntheticalConfig, interfaceInfo) {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var extendedInterfaceInfo, requestFunctionName, _b, requestConfigName, requestConfigTypeName, requestDataTypeName, _c, responseDataTypeName, _d, requestDataJsonSchema, requestDataType, responseDataJsonSchema, responseDataType, isRequestDataOptional, requestHookName, _e, _f, paramNames, paramNamesLiteral, paramNameType, queryNames, queryNamesLiteral, queryNameType, genComment, requestFunctionTemplate, baseURL, baseUrl, code;

      return __generator(this, function (_g) {
        switch (_g.label) {
          case 0:
            extendedInterfaceInfo = __assign(__assign({}, interfaceInfo), {
              parsedPath: path_1.default.parse(interfaceInfo.path)
            });
            if (!(0, vtils_1.isFunction)(syntheticalConfig.getRequestFunctionName)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , syntheticalConfig.getRequestFunctionName(extendedInterfaceInfo, changeCase)];

          case 1:
            _b = _g.sent();
            return [3
            /*break*/
            , 3];

          case 2:
            _b = this.requestFunctionNameGen(extendedInterfaceInfo);
            _g.label = 3;

          case 3:
            requestFunctionName = _b;
            requestConfigName = changeCase.camelCase("".concat(requestFunctionName, "RequestConfig"));
            requestConfigTypeName = changeCase.pascalCase(requestConfigName);
            if (!(0, vtils_1.isFunction)(syntheticalConfig.getRequestDataTypeName)) return [3
            /*break*/
            , 5];
            return [4
            /*yield*/
            , syntheticalConfig.getRequestDataTypeName(extendedInterfaceInfo, changeCase)];

          case 4:
            _c = _g.sent();
            return [3
            /*break*/
            , 6];

          case 5:
            _c = changeCase.pascalCase("".concat(requestFunctionName, "Request"));
            _g.label = 6;

          case 6:
            requestDataTypeName = _c;
            if (!(0, vtils_1.isFunction)(syntheticalConfig.getResponseDataTypeName)) return [3
            /*break*/
            , 8];
            return [4
            /*yield*/
            , syntheticalConfig.getResponseDataTypeName(extendedInterfaceInfo, changeCase)];

          case 7:
            _d = _g.sent();
            return [3
            /*break*/
            , 9];

          case 8:
            _d = changeCase.pascalCase("".concat(requestFunctionName, "Response"));
            _g.label = 9;

          case 9:
            responseDataTypeName = _d;
            requestDataJsonSchema = (0, utils_1.getRequestDataJsonSchema)(extendedInterfaceInfo);
            return [4
            /*yield*/
            , (0, utils_1.jsonSchemaToType)(requestDataJsonSchema, requestDataTypeName)];

          case 10:
            requestDataType = _g.sent();
            responseDataJsonSchema = (0, utils_1.getResponseDataJsonSchema)(extendedInterfaceInfo, syntheticalConfig.dataKey);
            return [4
            /*yield*/
            , (0, utils_1.jsonSchemaToType)(responseDataJsonSchema, responseDataTypeName)];

          case 11:
            responseDataType = _g.sent();
            isRequestDataOptional = /(\{\}|any)$/.test(requestDataType);
            if (!(syntheticalConfig.reactHooks && syntheticalConfig.reactHooks.enabled)) return [3
            /*break*/
            , 15];
            if (!(0, vtils_1.isFunction)(syntheticalConfig.reactHooks.getRequestHookName)) return [3
            /*break*/
            , 13];
            return [4
            /*yield*/
            , syntheticalConfig.reactHooks.getRequestHookName(extendedInterfaceInfo, changeCase)];

          case 12:
            _f = _g.sent();
            return [3
            /*break*/
            , 14];

          case 13:
            _f = "use".concat(changeCase.pascalCase(requestFunctionName));
            _g.label = 14;

          case 14:
            _e = _f;
            return [3
            /*break*/
            , 16];

          case 15:
            _e = '';
            _g.label = 16;

          case 16:
            requestHookName = _e;
            paramNames = (extendedInterfaceInfo.req_params
            /* istanbul ignore next */
            || []).map(function (item) {
              return item.name;
            });
            paramNamesLiteral = JSON.stringify(paramNames);
            paramNameType = paramNames.length === 0 ? 'string' : "'".concat(paramNames.join("' | '"), "'");
            queryNames = (extendedInterfaceInfo.req_query
            /* istanbul ignore next */
            || []).map(function (item) {
              return item.name;
            });
            queryNamesLiteral = JSON.stringify(queryNames);
            queryNameType = queryNames.length === 0 ? 'string' : "'".concat(queryNames.join("' | '"), "'");

            genComment = function genComment(genTitle) {
              var _a = __assign({}, syntheticalConfig.comment),
                  _b = _a.enabled,
                  isEnabled = _b === void 0 ? true : _b,
                  _c = _a.title,
                  hasTitle = _c === void 0 ? true : _c,
                  _d = _a.category,
                  hasCategory = _d === void 0 ? false : _d,
                  _e = _a.tag,
                  hasTag = _e === void 0 ? true : _e,
                  _f = _a.requestHeader,
                  hasRequestHeader = _f === void 0 ? true : _f,
                  _g = _a.updateTime,
                  hasUpdateTime = _g === void 0 ? true : _g,
                  _h = _a.link,
                  hasLink = _h === void 0 ? true : _h;

              if (!isEnabled) {
                return '';
              } // 转义标题中的 /


              var escapedTitle = String(extendedInterfaceInfo.title).replace(/\//g, '\\/');
              var titleComment = hasTitle ? (0, vtils_1.dedent)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            * ", "\n            *\n          "], ["\n            * ", "\n            *\n          "])), genTitle(escapedTitle)) : '';
              return (0, vtils_1.dedent)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        /**\n         ", "\n         */\n      "], ["\n        /**\n         ", "\n         */\n      "])), [titleComment].filter(Boolean).join('\n'));
            };

            requestFunctionTemplate = syntheticalConfig.requestFunctionTemplate || (syntheticalConfig.proxyInterface ? adminRequestFunctionTemplate : defaultRequestFunctionTemplate);
            baseURL = (_a = syntheticalConfig.gitRepoSettings) === null || _a === void 0 ? void 0 : _a.baseURL;

            try {
              baseUrl = typeof baseURL === 'string' ? baseURL : typeof baseURL === 'function' ? baseURL(extendedInterfaceInfo.path) : '';
            } catch (e) {
              conso.error(e);
            }

            code = (0, vtils_1.dedent)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      ", "\n      ", "\n\n      ", "\n      ", "\n\n      ", "\n    "], ["\n      ", "\n      ", "\n\n      ", "\n      ", "\n\n      ", "\n    "])), genComment(function (title) {
              return "\u63A5\u53E3 ".concat(title, " \u7684 **\u8BF7\u6C42\u7C7B\u578B**");
            }), requestDataType.trim(), genComment(function (title) {
              return "\u63A5\u53E3 ".concat(title, " \u7684 **\u8FD4\u56DE\u7C7B\u578B**");
            }), responseDataType.trim(), syntheticalConfig.typesOnly ? '' : (0, vtils_1.dedent)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            ", "\n            ", "\n\n          "], ["\n            ", "\n            ", "\n\n          "])), genComment(function (title) {
              return "\u63A5\u53E3 ".concat(title, " \u7684 **\u8BF7\u6C42\u51FD\u6570**");
            }), requestFunctionTemplate({
              baseURL: baseUrl,
              requestFunctionName: requestFunctionName,
              requestDataTypeName: requestDataTypeName,
              responseDataTypeName: responseDataTypeName,
              extendedInterfaceInfo: extendedInterfaceInfo
            }, syntheticalConfig)));
            return [2
            /*return*/
            , {
              code: code,
              responseDataJsonSchema: (0, responseDataJsonSchemaHandler_1.genJsonSchemeConstContent)(extendedInterfaceInfo.path, syntheticalConfig.serverUrl || '', extendedInterfaceInfo, responseDataJsonSchema)
            }];
        }
      });
    });
  };

  Generator.prototype.destroy = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.all(this.disposes.map(function (dispose) {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              return [2
              /*return*/
              , dispose()];
            });
          });
        }))];
      });
    });
  };
  /**
   * 清除仓库代码
   * @returns
   */


  Generator.prototype.clearGitRepo = function () {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var gitRepoPath;
      return __generator(this, function (_b) {
        gitRepoPath = (_a = this.gitRepoInfo) === null || _a === void 0 ? void 0 : _a.gitRepoPath;

        if (gitRepoPath) {
          return [2
          /*return*/
          , new Promise(function (resolve, reject) {
            (0, rimraf_1.default)(gitRepoPath, function (e) {
              if (e) reject(e);else resolve('success');
            });
          })];
        }

        return [2
        /*return*/
        , Promise.resolve('success')];
      });
    });
  };

  return Generator;
}();

exports.Generator = Generator;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;