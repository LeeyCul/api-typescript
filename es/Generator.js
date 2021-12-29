"use strict";

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
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

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
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

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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

var __generator = this && this.__generator || function (thisArg, body) {
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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

var __importDefault = this && this.__importDefault || function (mod) {
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

var dayjs_1 = __importDefault(require("dayjs"));

var fs_extra_1 = __importDefault(require("fs-extra"));

var path_1 = __importDefault(require("path"));

var conso = __importStar(require("./console"));

var os_1 = __importDefault(require("os"));

var vtils_1 = require("vtils");

var child_process_1 = require("child_process");

var utils_1 = require("./utils");

var SwaggerToYApiServer_1 = require("./SwaggerToYApiServer");

var genRequest_1 = __importDefault(require("./genRequest"));

var genIndex_1 = __importDefault(require("./genIndex"));

var responseDataJsonSchemaHandler_1 = require("./responseDataJsonSchemaHandler");

var requestYapiData_1 = require("./requestYapiData");

var getOutputPath_1 = require("./getOutputPath"); // 默认顶部依赖生成模板


function defaultTopImportPkgTemplate(config) {
  var defaultRequestLib = (config || {}).defaultRequestLib;
  return !defaultRequestLib ? "import request from '../request'" : '';
}

var getDataKeySetStr = function getDataKeySetStr(method) {
  if (['head', 'option', 'get'].includes(method.toLowerCase())) {
    return 'params: data';
  }

  return 'data';
}; // 默认请求函数体生成模板


function defaultRequestFunctionTemplate(props, config) {
  var baseURL = props.baseURL,
      requestFunctionName = props.requestFunctionName,
      requestDataTypeName = props.requestDataTypeName,
      responseDataTypeName = props.responseDataTypeName,
      extendedInterfaceInfo = props.extendedInterfaceInfo;
  var req_params = extendedInterfaceInfo.req_params,
      req_query = extendedInterfaceInfo.req_query;
  var hasData = req_params.length || req_query.length;
  var method = extendedInterfaceInfo.method.toLowerCase();
  var finalBaseUrl = '';

  if (baseURL === null || baseURL === void 0 ? void 0 : baseURL.match(/^\[code\]:/)) {
    // 如果使用[code]开头则表示，作为代码段执行，否则仅作为字符串
    finalBaseUrl = baseURL.replace(/^\[code\]:/, '');
  } else {
    finalBaseUrl = "\"".concat(baseURL, "\"");
  }

  return "export const ".concat(requestFunctionName, " = (data").concat(hasData ? '' : '?', ": ").concat(requestDataTypeName, ") => {\n    return request.").concat(method, "<").concat(requestDataTypeName, ",").concat(responseDataTypeName, ">(").concat(JSON.stringify(extendedInterfaceInfo.path), ", {\n      ").concat(getDataKeySetStr(method), ",\n      ").concat(baseURL ? "baseURL: ".concat(finalBaseUrl) : '', "\n    })\n  }");
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
    this.disposes = []; // config 可能是对象或数组，统一为数组

    this.config = config;
  }

  Generator.prototype.prepare = function () {
    return __awaiter(this, void 0, void 0, function () {
      var swaggerToYApiServer_1, _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!(this.config.serverType === 'swagger')) return [3
            /*break*/
            , 2];
            swaggerToYApiServer_1 = new SwaggerToYApiServer_1.SwaggerToYApiServer({
              swaggerJsonUrl: this.config.serverUrl
            });
            _a = this.config;
            return [4
            /*yield*/
            , swaggerToYApiServer_1.start()];

          case 1:
            _a.serverUrl = _b.sent();
            this.disposes.push(function () {
              return swaggerToYApiServer_1.stop();
            });
            _b.label = 2;

          case 2:
            if (this.config.serverUrl) {
              // 去除地址后面的 /
              // fix: https://github.com/fjc0k/yapi-to-typescript/issues/22
              this.config.serverUrl = this.config.serverUrl.replace(/\/+$/, '');
            }

            return [2
            /*return*/
            ];
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
      var outputFileList, _a, projects, serverUrl, serverType, preproccessInterface, outputFilePath, projectArray, projectArrayRender;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            outputFileList = Object.create(null);
            _a = this.config, projects = _a.projects, serverUrl = _a.serverUrl, serverType = _a.serverType, preproccessInterface = _a.preproccessInterface, outputFilePath = _a.outputFilePath;
            projectArray = (0, vtils_1.castArray)(projects);
            projectArrayRender = projectArray.map(function (project, projectIndex) {
              return __awaiter(_this, void 0, void 0, function () {
                var projectInfo, allInterfaceList, categoryInterfaceList, _a, categories, cids;

                var _this = this;

                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , (0, requestYapiData_1.fetchProjectInfo)(__assign(__assign({}, this.config), project))];

                    case 1:
                      projectInfo = _b.sent();
                      return [4
                      /*yield*/
                      , (0, requestYapiData_1.fetchInterfaceList)({
                        serverUrl: serverUrl,
                        token: project === null || project === void 0 ? void 0 : project.token
                      })];

                    case 2:
                      allInterfaceList = _b.sent();
                      categoryInterfaceList = {};
                      allInterfaceList.forEach(function (item, index) {
                        var catId = item._id;
                        categoryInterfaceList[catId] = item.list || [];
                      });
                      _a = (project || {}).categories, categories = _a === void 0 ? [] : _a;

                      if (categories && categories.length) {
                        cids = categories.map(function (item) {
                          return item.id;
                        });
                        categoryInterfaceList = (0, vtils_1.pick)(categoryInterfaceList, cids) || {};
                      } // console.log(categoryInterfaceList);


                      return [2
                      /*return*/
                      , Promise.all(Object.keys(categoryInterfaceList).map(function (catId, catIndex) {
                        return __awaiter(_this, void 0, void 0, function () {
                          var categoryConfig, interfaceList, categoryCode, categoryResponseDataJsonSchemaContent, interfaceCodes, catOutputFilePath;

                          var _this = this;

                          return __generator(this, function (_a) {
                            switch (_a.label) {
                              case 0:
                                categoryConfig = categories.filter(function (cat) {
                                  return String(cat.id) === catId;
                                })[0] || {};
                                interfaceList = categoryInterfaceList[catId];
                                interfaceList = interfaceList.map(function (interfaceInfo) {
                                  var path = interfaceInfo.path;
                                  var filter = categoryConfig.filter;

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
                                  } // 实现 _project 字段


                                  interfaceInfo._project = (0, vtils_1.omit)(projectInfo, ['cats', 'getMockUrl', 'getDevUrl', 'getProdUrl']); // 预处理

                                  var _interfaceInfo = (0, vtils_1.isFunction)(preproccessInterface) ? preproccessInterface((0, vtils_1.cloneDeepFast)(interfaceInfo), changeCase) : interfaceInfo;

                                  return _interfaceInfo;
                                }).filter(Boolean);
                                categoryCode = [];
                                categoryResponseDataJsonSchemaContent = [];
                                return [4
                                /*yield*/
                                , Promise.all(interfaceList.map(function (interfaceInfo) {
                                  return __awaiter(_this, void 0, void 0, function () {
                                    var finalOutputFilePath, categoryUID, _a, code, responseDataJsonSchema, weights;

                                    return __generator(this, function (_b) {
                                      switch (_b.label) {
                                        case 0:
                                          finalOutputFilePath = path_1.default.resolve(this.options.cwd, // typeof syntheticalConfig.outputFilePath === 'function'
                                          //   ? syntheticalConfig.outputFilePath(interfaceInfo, changeCase)
                                          //   : syntheticalConfig.outputFilePath!
                                          outputFilePath);
                                          categoryUID = "".concat(projectIndex, "_").concat(catId, "_").concat(catIndex);
                                          return [4
                                          /*yield*/
                                          , this.generateInterfaceCode(__assign(__assign({}, this.config), project), interfaceInfo, categoryUID)];

                                        case 1:
                                          _a = _b.sent(), code = _a.code, responseDataJsonSchema = _a.responseDataJsonSchema;
                                          weights = [Number(catId), catIndex];
                                          categoryCode.push(code);
                                          categoryResponseDataJsonSchemaContent.push(responseDataJsonSchema);
                                          return [2
                                          /*return*/
                                          , {
                                            categoryUID: categoryUID,
                                            outputFilePath: finalOutputFilePath,
                                            weights: weights,
                                            code: code,
                                            responseDataJsonSchema: responseDataJsonSchema
                                          }];
                                      }
                                    });
                                  });
                                }))];

                              case 1:
                                interfaceCodes = _a.sent();
                                catOutputFilePath = (0, getOutputPath_1.getOutputFilePath)(this.config, "/".concat(projectInfo._id, "/").concat(catId, ".ts"));
                                outputFileList[catOutputFilePath] = {
                                  projectId: String(projectInfo._id),
                                  categoryId: catId,
                                  syntheticalConfig: this.config,
                                  content: categoryCode,
                                  outputResponseDataJsonSchemaFilePath: (0, getOutputPath_1.getOutputFilePath)(this.config, "/".concat(projectInfo._id, "/").concat(catId, "responseDataJsonSchema.ts")),
                                  responseDataJsonSchemaContent: categoryResponseDataJsonSchemaContent,
                                  requestFunctionFilePath: this.config.requestFunctionFilePath ? path_1.default.resolve(this.options.cwd, this.config.requestFunctionFilePath) : path_1.default.join(path_1.default.dirname(catOutputFilePath), 'request.ts'),
                                  requestHookMakerFilePath: ''
                                };
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
            });
            return [4
            /*yield*/
            , Promise.all(projectArrayRender)];

          case 1:
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
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var JsonSchemaContentList, CategoryList, config, jsonSchemaEnabled;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            JsonSchemaContentList = [];
            CategoryList = [];
            Object.keys(outputFileList).forEach(function (filePath) {
              var item = outputFileList[filePath];
              JsonSchemaContentList.push(item.responseDataJsonSchemaContent.join('\n'));
              CategoryList.push((0, vtils_1.pick)(item, ['categoryId', 'projectId']));
            });
            config = this.config || {};
            jsonSchemaEnabled = (_a = config.jsonSchema) === null || _a === void 0 ? void 0 : _a.enabled; // 生成 request.ts

            return [4
            /*yield*/
            , (0, genRequest_1.default)(config)];

          case 1:
            // 生成 request.ts
            _b.sent(); // 生成入口 index.ts


            return [4
            /*yield*/
            , (0, genIndex_1.default)(config, CategoryList)];

          case 2:
            // 生成入口 index.ts
            _b.sent();

            return [2
            /*return*/
            , Promise.all(Object.keys(outputFileList).map(function (outputFilePath) {
              return __awaiter(_this, void 0, void 0, function () {
                var _a, content, requestFunctionFilePath, requestHookMakerFilePath, syntheticalConfig, outputResponseDataJsonSchemaFilePath, responseDataJsonSchemaContent, topImportPkgTemplate, rawOutputContent, outputContent;

                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      _a = outputFileList[outputFilePath], content = _a.content, requestFunctionFilePath = _a.requestFunctionFilePath, requestHookMakerFilePath = _a.requestHookMakerFilePath, syntheticalConfig = _a.syntheticalConfig, outputResponseDataJsonSchemaFilePath = _a.outputResponseDataJsonSchemaFilePath, responseDataJsonSchemaContent = _a.responseDataJsonSchemaContent; // 支持 .jsx? 后缀

                      outputFilePath = outputFilePath.replace(/\.js(x)?$/, '.ts$1');
                      requestFunctionFilePath = requestFunctionFilePath.replace(/\.js(x)?$/, '.ts$1');
                      requestHookMakerFilePath = requestHookMakerFilePath.replace(/\.js(x)?$/, '.ts$1');
                      topImportPkgTemplate = syntheticalConfig.topImportPkgTemplate || defaultTopImportPkgTemplate;
                      rawOutputContent = (0, vtils_1.dedent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          ", "\n          ", "\n\n          ", "\n        "], ["\n          ", "\n          ", "\n\n          ", "\n        "])), (0, utils_1.topNotesContent)(), topImportPkgTemplate(config), content.join('\n\n').trim());
                      outputContent = (0, utils_1.formatContent)((0, vtils_1.dedent)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), rawOutputContent), config.prettierConfigPath);
                      return [4
                      /*yield*/
                      , fs_extra_1.default.outputFile(outputFilePath, outputContent)];

                    case 1:
                      _b.sent();

                      if (jsonSchemaEnabled) {
                        fs_extra_1.default.outputFile(outputResponseDataJsonSchemaFilePath, (0, utils_1.formatContent)(responseDataJsonSchemaContent.join('\n\n'), config.prettierConfigPath));
                      }

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
                      , Promise.all([fs_extra_1.default.remove(requestFunctionFilePath).catch(vtils_1.noop), fs_extra_1.default.remove(requestHookMakerFilePath).catch(vtils_1.noop), fs_extra_1.default.remove(outputFilePath).catch(vtils_1.noop)])];

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


  Generator.prototype.generateInterfaceCode = function (syntheticalConfig, interfaceInfo, categoryUID) {
    return __awaiter(this, void 0, void 0, function () {
      var extendedInterfaceInfo, requestFunctionName, _a, requestConfigName, requestConfigTypeName, requestDataTypeName, _b, responseDataTypeName, _c, requestDataJsonSchema, requestDataType, responseDataJsonSchema, responseDataType, isRequestDataOptional, requestHookName, _d, _e, paramNames, paramNamesLiteral, paramNameType, queryNames, queryNamesLiteral, queryNameType, genComment, requestFunctionTemplate, baseURL, baseUrl, code;

      return __generator(this, function (_f) {
        switch (_f.label) {
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
            _a = _f.sent();
            return [3
            /*break*/
            , 3];

          case 2:
            _a = this.requestFunctionNameGen(extendedInterfaceInfo);
            _f.label = 3;

          case 3:
            requestFunctionName = _a;
            requestConfigName = changeCase.camelCase("".concat(requestFunctionName, "RequestConfig"));
            requestConfigTypeName = changeCase.pascalCase(requestConfigName);
            if (!(0, vtils_1.isFunction)(syntheticalConfig.getRequestDataTypeName)) return [3
            /*break*/
            , 5];
            return [4
            /*yield*/
            , syntheticalConfig.getRequestDataTypeName(extendedInterfaceInfo, changeCase)];

          case 4:
            _b = _f.sent();
            return [3
            /*break*/
            , 6];

          case 5:
            _b = changeCase.pascalCase("".concat(requestFunctionName, "Request"));
            _f.label = 6;

          case 6:
            requestDataTypeName = _b;
            if (!(0, vtils_1.isFunction)(syntheticalConfig.getResponseDataTypeName)) return [3
            /*break*/
            , 8];
            return [4
            /*yield*/
            , syntheticalConfig.getResponseDataTypeName(extendedInterfaceInfo, changeCase)];

          case 7:
            _c = _f.sent();
            return [3
            /*break*/
            , 9];

          case 8:
            _c = changeCase.pascalCase("".concat(requestFunctionName, "Response"));
            _f.label = 9;

          case 9:
            responseDataTypeName = _c;
            requestDataJsonSchema = (0, utils_1.getRequestDataJsonSchema)(extendedInterfaceInfo);
            return [4
            /*yield*/
            , (0, utils_1.jsonSchemaToType)(requestDataJsonSchema, requestDataTypeName)];

          case 10:
            requestDataType = _f.sent();
            responseDataJsonSchema = (0, utils_1.getResponseDataJsonSchema)(extendedInterfaceInfo, syntheticalConfig.dataKey);
            return [4
            /*yield*/
            , (0, utils_1.jsonSchemaToType)(responseDataJsonSchema, responseDataTypeName)];

          case 11:
            responseDataType = _f.sent();
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
            _e = _f.sent();
            return [3
            /*break*/
            , 14];

          case 13:
            _e = "use".concat(changeCase.pascalCase(requestFunctionName));
            _f.label = 14;

          case 14:
            _d = _e;
            return [3
            /*break*/
            , 16];

          case 15:
            _d = '';
            _f.label = 16;

          case 16:
            requestHookName = _d;
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
              var _a = __assign(__assign({}, syntheticalConfig.comment), syntheticalConfig.serverType === 'swagger' ? {
                tag: false,
                updateTime: false,
                link: false
              } : {}),
                  _b = _a.enabled,
                  isEnabled = _b === void 0 ? true : _b,
                  _c = _a.title,
                  hasTitle = _c === void 0 ? true : _c,
                  _d = _a.category,
                  hasCategory = _d === void 0 ? true : _d,
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
              var description = hasLink ? "[".concat(escapedTitle, "\u2197](").concat(syntheticalConfig.serverUrl, "/project/").concat(extendedInterfaceInfo.project_id, "/interface/api/").concat(extendedInterfaceInfo._id, ")") : escapedTitle;
              var summary = [hasCategory && {
                label: '分类',
                value: hasLink ? "[".concat(extendedInterfaceInfo._category.name, "\u2197](").concat(syntheticalConfig.serverUrl, "/project/").concat(extendedInterfaceInfo.project_id, "/interface/api/cat_").concat(extendedInterfaceInfo.catid, ")") : extendedInterfaceInfo._category.name
              }, hasTag && {
                label: '标签',
                value: extendedInterfaceInfo.tag.map(function (tag) {
                  return "`".concat(tag, "`");
                })
              }, hasRequestHeader && {
                label: '请求头',
                value: "`".concat(extendedInterfaceInfo.method.toUpperCase(), " ").concat(extendedInterfaceInfo.path, "`")
              }, hasUpdateTime && {
                label: '更新时间',
                value: process.env.JEST_WORKER_ID // 测试时使用 unix 时间戳
                ? String(extendedInterfaceInfo.up_time) :
                /* istanbul ignore next */
                "`".concat((0, dayjs_1.default)(extendedInterfaceInfo.up_time * 1000).format('YYYY-MM-DD HH:mm:ss'), "`")
              }];
              var titleComment = hasTitle ? (0, vtils_1.dedent)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            * ", "\n            *\n          "], ["\n            * ", "\n            *\n          "])), genTitle(description)) : '';
              var extraComment = summary.filter(function (item) {
                return typeof item !== 'boolean' && !(0, vtils_1.isEmpty)(item.value);
              }).map(function (item) {
                var _item = item;
                return "* @".concat(_item.label, " ").concat((0, vtils_1.castArray)(_item.value).join(', '));
              }).join('\n');
              return (0, vtils_1.dedent)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        /**\n         ", "\n         */\n      "], ["\n        /**\n         ", "\n         */\n      "])), [titleComment].filter(Boolean).join('\n'));
            };

            requestFunctionTemplate = syntheticalConfig.requestFunctionTemplate || (syntheticalConfig.proxyInterface ? adminRequestFunctionTemplate : defaultRequestFunctionTemplate);
            baseURL = syntheticalConfig.baseURL;

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

  return Generator;
}();

exports.Generator = Generator;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;