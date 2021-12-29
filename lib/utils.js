"use strict";

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
exports.topNotesContent = exports.formatContent = exports.sortByWeights = exports.getResponseDataJsonSchema = exports.getRequestDataJsonSchema = exports.jsonSchemaToType = exports.JSTTOptions = exports.getPrettier = exports.propDefinitionsToJsonSchema = exports.mockjsTemplateToJsonSchema = exports.jsonToJsonSchema = exports.jsonSchemaStringToJsonSchema = exports.processJsonSchema = exports.getNormalizedRelativePath = exports.toUnixPath = exports.throwError = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */

/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable no-param-reassign */

/* eslint-disable no-underscore-dangle */

var json5_1 = __importDefault(require("json5"));

var mockjs_1 = __importDefault(require("mockjs"));

var path_1 = __importDefault(require("path"));

var to_json_schema_1 = __importDefault(require("to-json-schema"));

var vtils_1 = require("vtils");

var json_schema_to_typescript_1 = require("json-schema-to-typescript");

var helpers_1 = require("./helpers");

var prettier_1 = __importDefault(require("prettier"));

var dayjs_1 = __importDefault(require("dayjs"));

var types_1 = require("./types");
/**
 * 抛出错误。
 *
 * @param msg 错误信息
 */


function throwError() {
  var msg = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    msg[_i] = arguments[_i];
  }
  /* istanbul ignore next */


  throw new Error(msg.join(''));
}

exports.throwError = throwError;
/**
 * 将路径统一为 unix 风格的路径。
 *
 * @param path 路径
 * @returns unix 风格的路径
 */

function toUnixPath(path) {
  return path.replace(/[/\\]+/g, '/');
}

exports.toUnixPath = toUnixPath;
/**
 * 获得规范化的相对路径。
 *
 * @param from 来源路径
 * @param to 去向路径
 * @returns 相对路径
 */

function getNormalizedRelativePath(from, to) {
  return toUnixPath(path_1.default.relative(path_1.default.dirname(from), to)).replace(/^(?=[^.])/, './').replace(/\.(ts|js)x?$/i, '');
}

exports.getNormalizedRelativePath = getNormalizedRelativePath;
/**
 * 原地处理 JSONSchema。
 *
 * @param jsonSchema 待处理的 JSONSchema
 * @returns 处理后的 JSONSchema
 */

function processJsonSchema(jsonSchema) {
  /* istanbul ignore if */
  if (!(0, vtils_1.isObject)(jsonSchema)) return jsonSchema; // 去除 title 和 id，防止 json-schema-to-typescript 提取它们作为接口名

  delete jsonSchema.title;
  delete jsonSchema.id; // 忽略数组长度限制

  delete jsonSchema.minItems;
  delete jsonSchema.maxItems; // 将 additionalProperties 设为 false

  jsonSchema.additionalProperties = false; // 删除通过 swagger 导入时未剔除的 ref

  delete jsonSchema.$ref;
  delete jsonSchema.$$ref; // 删除 default，防止 json-schema-to-typescript 根据它推测类型

  delete jsonSchema.default; // 处理类型名称为标准的 JSONSchema 类型名称

  if (jsonSchema.type) {
    var isMultiple = Array.isArray(jsonSchema.type);
    var types = (0, vtils_1.castArray)(jsonSchema.type).map(function (type) {
      // 所有类型转成小写，如：String -> string
      type = type.toLowerCase(); // 映射为标准的 JSONSchema 类型

      type = {
        int: 'integer'
      }[type] || type;
      return type;
    });
    jsonSchema.type = isMultiple ? types : types[0];
  } // Mock.toJSONSchema 产生的 properties 为数组，然而 JSONSchema4 的 properties 为对象


  if ((0, vtils_1.isArray)(jsonSchema.properties)) {
    jsonSchema.properties = jsonSchema.properties.reduce(function (props, js) {
      props[js.name] = js;
      return props;
    }, {});
  } // 移除字段名称首尾空格


  if (jsonSchema.properties) {
    (0, vtils_1.forOwn)(jsonSchema.properties, function (_, prop) {
      var propDef = jsonSchema.properties[prop];
      delete jsonSchema.properties[prop];
      jsonSchema.properties[prop.trim()] = propDef;
    });
    jsonSchema.required = jsonSchema.required && jsonSchema.required.map(function (prop) {
      return prop.trim();
    });
  } // 继续处理对象的子元素


  if (jsonSchema.properties) {
    (0, vtils_1.forOwn)(jsonSchema.properties, processJsonSchema);
  } // 继续处理数组的子元素


  if (jsonSchema.items) {
    (0, vtils_1.castArray)(jsonSchema.items).forEach(processJsonSchema);
  } // 处理 oneOf


  if (jsonSchema.oneOf) {
    jsonSchema.oneOf.forEach(processJsonSchema);
  } // 处理 anyOf


  if (jsonSchema.anyOf) {
    jsonSchema.anyOf.forEach(processJsonSchema);
  } // 处理 allOf


  if (jsonSchema.allOf) {
    jsonSchema.allOf.forEach(processJsonSchema);
  }

  return jsonSchema;
}

exports.processJsonSchema = processJsonSchema;
/**
 * 将 JSONSchema 字符串转为 JSONSchema 对象。
 *
 * @param str 要转换的 JSONSchema 字符串
 * @returns 转换后的 JSONSchema 对象
 */

function jsonSchemaStringToJsonSchema(str) {
  return processJsonSchema(JSON.parse(str));
}

exports.jsonSchemaStringToJsonSchema = jsonSchemaStringToJsonSchema;
/**
 * 获得 JSON 数据的 JSONSchema 对象。
 *
 * @param json JSON 数据
 * @returns JSONSchema 对象
 */

function jsonToJsonSchema(json) {
  var schema = (0, to_json_schema_1.default)(json, {
    required: false,
    arrays: {
      mode: 'first'
    },
    objects: {
      additionalProperties: false
    },
    strings: {
      detectFormat: false
    },
    postProcessFnc: function postProcessFnc(type, schema, value) {
      if (!schema.description && !!value && type !== 'object') {
        schema.description = JSON.stringify(value);
      }

      return schema;
    }
  });
  delete schema.description;
  return processJsonSchema(schema);
}

exports.jsonToJsonSchema = jsonToJsonSchema;
/**
 * 获得 mockjs 模板的 JSONSchema 对象。
 *
 * @param template mockjs 模板
 * @returns JSONSchema 对象
 */

function mockjsTemplateToJsonSchema(template) {
  return processJsonSchema(mockjs_1.default.toJSONSchema(template));
}

exports.mockjsTemplateToJsonSchema = mockjsTemplateToJsonSchema;
/**
 * 获得属性定义列表的 JSONSchema 对象。
 *
 * @param propDefinitions 属性定义列表
 * @returns JSONSchema 对象
 */

function propDefinitionsToJsonSchema(propDefinitions) {
  return processJsonSchema({
    type: 'object',
    required: propDefinitions.reduce(function (res, prop) {
      if (prop.required) {
        res.push(prop.name);
      }

      return res;
    }, []),
    properties: propDefinitions.reduce(function (res, prop) {
      res[prop.name] = __assign({
        type: prop.type,
        description: prop.comment
      }, prop.type === 'file' ? {
        tsType: helpers_1.FileData.name
      } : {});
      return res;
    }, {})
  });
}

exports.propDefinitionsToJsonSchema = propDefinitionsToJsonSchema;
/**
 * 获取prettier配置
 * @returns
 */

function getPrettier(filePath) {
  // 从项目中获取prettier配置文件
  var configPath = prettier_1.default.resolveConfigFile.sync(filePath && path_1.default.resolve(filePath) || process.cwd());
  var config = configPath && prettier_1.default.resolveConfig.sync(configPath) || {};
  return config ? __assign({
    parser: 'babel-ts'
  }, config) : {
    printWidth: 120,
    tabWidth: 2,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    bracketSpacing: false,
    endOfLine: 'lf',
    parser: 'babel-ts'
  };
}

exports.getPrettier = getPrettier;

function JSTTOptions() {
  return {
    bannerComment: '',
    style: getPrettier()
  };
}

exports.JSTTOptions = JSTTOptions;
/**
 * 根据 JSONSchema 对象生产 TypeScript 类型定义。
 *
 * @param jsonSchema JSONSchema 对象
 * @param typeName 类型名称
 * @returns TypeScript 类型定义
 */

function jsonSchemaToType(jsonSchema, typeName) {
  return __awaiter(this, void 0, void 0, function () {
    var fakeTypeName, code;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if ((0, vtils_1.isEmpty)(jsonSchema)) {
            return [2
            /*return*/
            , "export interface ".concat(typeName, " {}")];
          }

          if (jsonSchema.__is_any__) {
            delete jsonSchema.__is_any__;
            return [2
            /*return*/
            , "export type ".concat(typeName, " = any")];
          }

          fakeTypeName = 'THISISAFAKETYPENAME';
          return [4
          /*yield*/
          , (0, json_schema_to_typescript_1.compile)(jsonSchema, fakeTypeName, JSTTOptions())];

        case 1:
          code = _a.sent();
          delete jsonSchema.id;
          return [2
          /*return*/
          , code.replace(fakeTypeName, typeName).trim()];
      }
    });
  });
}

exports.jsonSchemaToType = jsonSchemaToType;

function getRequestDataJsonSchema(interfaceInfo) {
  var jsonSchema;

  switch (interfaceInfo.req_body_type) {
    case types_1.RequestBodyType.form:
      jsonSchema = propDefinitionsToJsonSchema(interfaceInfo.req_body_form.map(function (item) {
        return {
          name: item.name,
          required: item.required === types_1.Required.true,
          type: item.type === types_1.RequestFormItemType.file ? 'file' : 'string',
          comment: item.desc
        };
      }));
      break;

    case types_1.RequestBodyType.json:
      if (interfaceInfo.req_body_other) {
        jsonSchema = interfaceInfo.req_body_is_json_schema ? jsonSchemaStringToJsonSchema(interfaceInfo.req_body_other) : jsonToJsonSchema(json5_1.default.parse(interfaceInfo.req_body_other));
      }

      break;

    default:
      /* istanbul ignore next */
      break;
  }

  if ((0, vtils_1.isArray)(interfaceInfo.req_query) && interfaceInfo.req_query.length) {
    var queryJsonSchema = propDefinitionsToJsonSchema(interfaceInfo.req_query.map(function (item) {
      return {
        name: item.name,
        required: item.required === types_1.Required.true,
        type: item.type || 'any',
        comment: item.desc
      };
    }));
    /* istanbul ignore else */

    if (jsonSchema) {
      jsonSchema.properties = __assign(__assign({}, jsonSchema.properties), queryJsonSchema.properties);
      jsonSchema.required = __spreadArray(__spreadArray([], jsonSchema.required || [], true), queryJsonSchema.required || [], true);
    } else {
      jsonSchema = queryJsonSchema;
    }
  }

  if ((0, vtils_1.isArray)(interfaceInfo.req_params) && interfaceInfo.req_params.length) {
    var paramsJsonSchema = propDefinitionsToJsonSchema(interfaceInfo.req_params.map(function (item) {
      return {
        name: item.name,
        required: true,
        type: item.type || 'string',
        comment: item.desc
      };
    }));
    /* istanbul ignore else */

    if (jsonSchema) {
      jsonSchema.properties = __assign(__assign({}, jsonSchema.properties), paramsJsonSchema.properties);
      jsonSchema.required = __spreadArray(__spreadArray([], jsonSchema.required || [], true), paramsJsonSchema.required || [], true);
    } else {
      jsonSchema = paramsJsonSchema;
    }
  }

  return jsonSchema;
}

exports.getRequestDataJsonSchema = getRequestDataJsonSchema;

function getResponseDataJsonSchema(interfaceInfo, dataKey) {
  var jsonSchema = {};

  switch (interfaceInfo.res_body_type) {
    case types_1.ResponseBodyType.json:
      if (interfaceInfo.res_body) {
        jsonSchema = interfaceInfo.res_body_is_json_schema ? jsonSchemaStringToJsonSchema(interfaceInfo.res_body) : mockjsTemplateToJsonSchema(json5_1.default.parse(interfaceInfo.res_body));
      }

      break;

    default:
      jsonSchema = {
        __is_any__: true
      };
      break;
  }
  /* istanbul ignore if */


  if (dataKey && jsonSchema && jsonSchema.properties && jsonSchema.properties[dataKey]) {
    jsonSchema = jsonSchema.properties[dataKey];
  }

  return jsonSchema;
}

exports.getResponseDataJsonSchema = getResponseDataJsonSchema;

function sortByWeights(list) {
  list.sort(function (a, b) {
    var _a;

    var x = a.weights.length > b.weights.length ? b : a;
    var minLen = Math.min(a.weights.length, b.weights.length);
    var maxLen = Math.max(a.weights.length, b.weights.length);

    (_a = x.weights).push.apply(_a, new Array(maxLen - minLen).fill(0));

    var w = a.weights.reduce(function (w, _, i) {
      if (w === 0) {
        w = a.weights[i] - b.weights[i];
      }

      return w;
    }, 0);
    return w;
  });
  return list;
}

exports.sortByWeights = sortByWeights;
/**
 * 格式化代码字符串
 * @param content
 * @param config
 * @returns
 * https://prettier.io/docs/en/options.html
 */

function formatContent(content, prettierConfigPath) {
  // 从项目中获取prettier配置文件
  var config = getPrettier(prettierConfigPath);
  var prettyOutputContent = prettier_1.default.format(content, config);
  return prettyOutputContent;
}

exports.formatContent = formatContent;
/**
 * 通用生成文件顶部注释
 * @returns
 */

function topNotesContent() {
  return "\n  /**\n   * Created By api-swgger\n   * Update Time: ".concat((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), "\n   */\n\n  ");
}

exports.topNotesContent = topNotesContent;