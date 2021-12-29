"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonSchemeFileHeader = exports.runner = exports.responseDataInspector = exports.warning = exports.getDefaultValue = exports.isEmpty = exports.typeStr = exports.genJsonSchemeConstContent = exports.jsonSchemeKey = void 0;

var changeCase = __importStar(require("change-case"));

var jsonSchemeKey = function jsonSchemeKey(path) {
  var deeps = path.split('/');
  var names = deeps.splice(deeps.length - 4, deeps.length).join('_');
  return changeCase.camelCase(names);
};

exports.jsonSchemeKey = jsonSchemeKey;

var genJsonSchemeConstContent = function genJsonSchemeConstContent(path, serverUrl, info, JSONSchema) {
  var name = (0, exports.jsonSchemeKey)(path);
  var escapedTitle = String(info.title).replace(/\//g, '\\/');
  var description = "[".concat(escapedTitle, "\u2197](").concat(serverUrl, "/project/").concat(info.project_id, "/interface/api/").concat(info._id, ")");
  return "\n    /**\n     * ".concat(description, "\n     */\n    export const ").concat(name, " = ").concat(JSON.stringify(JSONSchema), "\n  ");
};

exports.genJsonSchemeConstContent = genJsonSchemeConstContent;

var typeStr = function typeStr(data) {
  var type = _typeof(data);

  if (type === 'object' && data instanceof Array) {
    return 'array';
  }

  if (type === 'object' && data === null) {
    return 'null';
  }

  if (type === 'number') {
    return 'integer';
  }

  return type;
};

exports.typeStr = typeStr;

var isEmpty = function isEmpty(data) {
  return data === undefined || data === null || data === 0;
};

exports.isEmpty = isEmpty;

var getDefaultValue = function getDefaultValue(type) {
  switch (type) {
    case 'string':
      return '';

    case 'object':
      return {};

    case 'array':
      return [];

    case 'integer':
      return -Infinity;

    default:
      return undefined;
  }
};

exports.getDefaultValue = getDefaultValue;

var warning = function warning(content) {
  console.warn("->ResponseDataInspector\uFF1A".concat(content));
};

exports.warning = warning;

var responseDataInspector = function responseDataInspector(data, jsonScheme, key) {
  if (key === void 0) {
    key = ['data'];
  }

  var type = jsonScheme.type,
      properties = jsonScheme.properties,
      items = jsonScheme.items;

  if (type !== (0, exports.typeStr)(data)) {
    (0, exports.warning)("".concat(key.join('.'), "\u4E0E\u7EA6\u5B9A\u7684\u7C7B\u578B\u4E0D\u7B26\uFF0C\u7C7B\u578B\uFF1A").concat(type, "\uFF0C\u8FD4\u56DE\u503C\uFF1A").concat(data));
    return false;
  }

  if (type === 'object') {
    if (!properties || !Object.keys(properties).length) {
      return true;
    }

    return Object.keys(properties).every(function (k) {
      return (0, exports.responseDataInspector)(data[k], properties[k], __spreadArray(__spreadArray([], key, true), [k], false));
    });
  }

  if (type === 'array') {
    if (items === undefined) {
      // undefined则为接受任意类型
      return true;
    }

    if (items instanceof Array) {
      return data.some(function (v) {
        return items.every(function (item) {
          return (0, exports.responseDataInspector)(v, item);
        });
      });
    }

    if (items instanceof Object) {
      return data.every(function (v, index) {
        return (0, exports.responseDataInspector)(v, items, __spreadArray(__spreadArray([], key, true), [index], false));
      });
    }
  }

  return true;
};

exports.responseDataInspector = responseDataInspector;

var runner = function runner(path, data, jsonSchema) {
  var key = (0, exports.jsonSchemeKey)(path);
  (0, exports.responseDataInspector)(data, jsonSchema[key]);
};

exports.runner = runner;

var jsonSchemeFileHeader = function jsonSchemeFileHeader() {
  return "\n  import * as changeCase from 'change-case';\n  import { JSONSchema4 } from 'api-typescript';\n\n  /**\n   * \u83B7\u53D6scheme\u7684key\n   */\n  export const jsonSchemeKey = function (path: string): string {\n    const deeps = path.split('/');\n    const names = deeps.splice(deeps.length - 4, deeps.length).join('_');\n    return changeCase.camelCase(names);\n  };\n\n  export const typeStr = function (data: unknown): string {\n    const type = typeof data;\n    if (type === 'object' && data instanceof Array) {\n      return 'array';\n    }\n    if (type === 'object' && data === null) {\n      return 'null';\n    }\n    if (type === 'number') {\n      return 'integer';\n    }\n\n    return type;\n  };\n\n  /**\n   * \u68C0\u67E5\u5668\n   */\n  export const responseDataInspector = function (data: any, jsonScheme: JSONSchema4, key: any[] = ['data']): boolean {\n    const { type, properties, items } = jsonScheme;\n\n    if (type !== typeStr(data)) {\n      console.warn(`->ResponseDataInspector\uFF1A${key.join('.')}\u4E0E\u7EA6\u5B9A\u7684\u7C7B\u578B\u4E0D\u7B26\uFF0C\u7C7B\u578B\uFF1A${type}\uFF0C\u8FD4\u56DE\u503C\uFF1A${data}`);\n      return false;\n    }\n    if (type === 'object') {\n      if (!properties || !Object.keys(properties).length) {\n        return true;\n      }\n      return Object.keys(properties).every(k => responseDataInspector(data[k], properties[k], [...key, k]));\n    }\n    if (type === 'array') {\n      if (items === undefined) {\n        // undefined\u5219\u4E3A\u63A5\u53D7\u4EFB\u610F\u7C7B\u578B\n        return true;\n      }\n      if (items instanceof Array) {\n        return (data as Array<any>).some(v => items.every(item => responseDataInspector(v, item)));\n      }\n      if (items instanceof Object) {\n        return (data as Array<any>).every((v, index) => responseDataInspector(v, items, [...key, index]));\n      }\n    }\n\n    return true;\n  };\n\n  export const runner = function (path: string, data: any, jsonSchema: Record<string, any>): void {\n    const key = jsonSchemeKey(path);\n    responseDataInspector(data, jsonSchema[key]);\n  };\n  ";
};

exports.jsonSchemeFileHeader = jsonSchemeFileHeader;