"use strict";
/**
 * 生成入口文件
 */

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
exports.genGitRepoIndex = exports.getIndexGitInfo = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

var fs_extra_1 = __importDefault(require("fs-extra"));

var path_1 = __importDefault(require("path"));

var vtils_1 = require("vtils");

var getOutputPath_1 = require("./getOutputPath");

var utils_1 = require("./utils");

var responseDataJsonSchemaHandler_1 = require("./responseDataJsonSchemaHandler");

var conso = __importStar(require("./console"));

exports.default = function (config, categoryList) {
  return __awaiter(void 0, void 0, void 0, function () {
    var prettierConfigPath, indexFilePath, originFileContent, exportAllInterface, content, inspector, exportAllSchema, schemaContent, schemaFilePath;

    var _a;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          prettierConfigPath = config.prettierConfigPath;
          indexFilePath = (0, getOutputPath_1.getOutputFilePath)(config, 'index.ts');
          originFileContent = '';
          return [4
          /*yield*/
          , fs_extra_1.default.pathExists(indexFilePath)];

        case 1:
          if (_b.sent()) {
            originFileContent = fs_extra_1.default.readFileSync(indexFilePath, {
              encoding: 'utf-8'
            });
          }

          exportAllInterface = categoryList.reduce(function (list, _a, index) {
            var categoryId = _a.categoryId,
                projectId = _a.projectId; // return `export * from  "./${projectId}/${categoryId}"`;

            if (originFileContent.indexOf("".concat(projectId, "/").concat(categoryId)) === -1) {
              list.push("export * from  \"./".concat(projectId, "/").concat(categoryId, "\""));
            }

            return list;
          }, []);
          content = "\n    ".concat(!originFileContent ? (0, utils_1.topNotesContent)() : '', "\n    ").concat(originFileContent, "\n    ").concat(exportAllInterface.join(';'), "\n  "); // 输出index文件

          fs_extra_1.default.outputFile(indexFilePath, (0, utils_1.formatContent)((0, vtils_1.dedent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), content), prettierConfigPath));
          inspector = (_a = config.jsonSchema) === null || _a === void 0 ? void 0 : _a.enabled;

          if (inspector) {
            exportAllSchema = categoryList.map(function (_a) {
              var categoryId = _a.categoryId,
                  projectId = _a.projectId;
              return "export * from  \"./".concat(projectId, "/").concat(categoryId, "responseDataJsonSchema\"");
            });
            schemaContent = "\n    ".concat((0, utils_1.topNotesContent)(), "\n    ").concat(exportAllSchema.join(';'), "\n    ").concat((0, responseDataJsonSchemaHandler_1.jsonSchemeFileHeader)(), "\n  ");
            schemaFilePath = (0, getOutputPath_1.getOutputFilePath)(config, 'responseDataJsonSchema.ts');
            fs_extra_1.default.outputFile(schemaFilePath, (0, utils_1.formatContent)((0, vtils_1.dedent)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), schemaContent), prettierConfigPath));
          }

          return [2
          /*return*/
          ];
      }
    });
  });
};

var getIndexGitInfo = function getIndexGitInfo(config) {
  var indexFilePath = (0, getOutputPath_1.getOutputFilePath)(config, 'index.ts');
  var result = {};

  try {
    var fileContent_1 = fs_extra_1.default.readFileSync(indexFilePath, {
      encoding: 'utf-8'
    });
    ['repo', 'branch', 'commitId'].forEach(function (k) {
      var reg = new RegExp("".concat(k, ":\\s?([A-Za-z0-9_\\-/://]+)\\s"));
      var matchRes = fileContent_1.match(reg) || [];
      result[k] = matchRes[1] || '';
    });
  } catch (e) {
    conso.tips("\u672A\u627E\u5230".concat(indexFilePath, "\uFF0C\u5C06\u91CD\u65B0\u751F\u6210"));
  }

  return result;
};

exports.getIndexGitInfo = getIndexGitInfo;

var genGitRepoIndex = function genGitRepoIndex(config, filePathList, notes) {
  return __awaiter(void 0, void 0, void 0, function () {
    var prettierConfigPath, indexFilePath, originFileContent, exportAllInterface, content;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          prettierConfigPath = config.prettierConfigPath;
          indexFilePath = (0, getOutputPath_1.getOutputFilePath)(config, 'index.ts');
          originFileContent = '';
          return [4
          /*yield*/
          , fs_extra_1.default.pathExists(indexFilePath)];

        case 1:
          if (_a.sent()) {
            originFileContent = fs_extra_1.default.readFileSync(indexFilePath, {
              encoding: 'utf-8'
            });
          } // 清除顶部日志信息


          originFileContent = originFileContent.replace(/\/\/(\s+)?<-Logs->(.|\n)+\/\/(\s+)?<-END->/, '');
          exportAllInterface = filePathList.reduce(function (list, filePath, index) {
            if (originFileContent.indexOf(filePath) === -1) {
              list.push("export * from  \"./".concat(path_1.default.join('./', filePath), "\""));
            }

            return list;
          }, []);
          content = "\n    // <-Logs->\n    ".concat(notes || (0, utils_1.topNotesContent)(), "\n    // <-END->\n    ").concat(originFileContent, "\n    ").concat(exportAllInterface.join(';'), "\n  "); // 输出index文件

          fs_extra_1.default.outputFile(indexFilePath, (0, utils_1.formatContent)((0, vtils_1.dedent)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", ""], ["", ""])), content), prettierConfigPath));
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.genGitRepoIndex = genGitRepoIndex;
var templateObject_1, templateObject_2, templateObject_3;