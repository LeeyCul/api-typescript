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
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

var fs_extra_1 = __importDefault(require("fs-extra"));

var vtils_1 = require("vtils");

var getOutputPath_1 = require("./getOutputPath");

var utils_1 = require("./utils");

var conso = __importStar(require("./console"));

exports.default = function (config) {
  return __awaiter(void 0, void 0, void 0, function () {
    var prettierConfigPath, _a, defaultRequestLib, outputFilePath, rawRequestFunctionFilePath, inspector, content;

    var _b;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          prettierConfigPath = config.prettierConfigPath, _a = config.defaultRequestLib, defaultRequestLib = _a === void 0 ? false : _a, outputFilePath = config.outputFilePath;
          if (defaultRequestLib === false) return [2
          /*return*/
          ];
          rawRequestFunctionFilePath = (0, getOutputPath_1.getOutputFilePath)(config, 'request.ts');
          if (!!config.typesOnly) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , fs_extra_1.default.pathExists(rawRequestFunctionFilePath)];

        case 1:
          if (_c.sent()) {
            conso.tips("\u8F93\u51FA\u76EE\u5F55".concat(outputFilePath, "\u4E0B\u68C0\u6D4B\u5230\u5DF2\u6709request.ts\uFF0C\u5982\u679C\u9700\u8981\u91CD\u65B0\u751F\u6210\uFF0C\u8BF7\u5220\u9664\u8BE5\u6587\u4EF6 \n"));
            return [2
            /*return*/
            ];
          }

          _c.label = 2;

        case 2:
          inspector = (_b = config.jsonSchema) === null || _b === void 0 ? void 0 : _b.enabled;
          content = "\n  ".concat((0, utils_1.topNotesContent)(), "\n\n  import request from 'axios';\n  ").concat(inspector ? "import * as jsonScheme from './responseDataJsonSchema'" : '', "\n\n\n  const instance = request.create({\n    withCredentials: true,\n    baseURL: process.env.MED_API_HOST,\n  });\n\n  // \u81EA\u5B9A\u4E49request\u62E6\u622A\u5668\n  instance.interceptor.req((config) => {\n    return  {\n      ...config\n    }\n  });\n\n  // \u81EA\u5B9A\u4E49response\u62E6\u622A\u5668\uFF0C\n  // \u6CE8\u610F\uFF1A\u5982\u679C\u4FEE\u6539\u63A5\u53E3\u6B63\u5E38\u8FD4\u56DE\u7684\u7ED3\u6784\uFF0C\u5BF9\u5E94\u7684response\u58F0\u660E\u9700\u8981\u4FEE\u6539\n  instance.interceptor.res((r) => {\n    const { data, config } = r;\n    if (data.errcode === 0 || data.code === 0) {\n      ").concat(inspector ? "try{\n        jsonScheme.runner(config.url,data.data,jsonScheme)\n      }catch(e){\n        console.log(e)\n      }" : '', "\n\n      return data.data;\n    }\n    return Promise.reject(data);\n  });\n\n  // \u81EA\u5B9A\u4E49\u5F02\u5E38\u62E6\u622A\u5668\n  instance.interceptor.error((error) => {\n    const { response, config } = error;\n    return Promise.reject(error);\n  });\n\n  export default instance;\n");
          fs_extra_1.default.outputFile(rawRequestFunctionFilePath, (0, utils_1.formatContent)((0, vtils_1.dedent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), content), prettierConfigPath));
          return [2
          /*return*/
          ];
      }
    });
  });
};

var templateObject_1;