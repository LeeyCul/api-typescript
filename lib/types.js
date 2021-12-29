"use strict";

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

var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseBodyType = exports.RequestFormItemType = exports.RequestQueryType = exports.RequestParamType = exports.RequestBodyType = exports.Required = exports.Method = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable no-shadow */

/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable camelcase */

/* eslint-disable no-use-before-define */

__exportStar(require("json-schema"), exports);
/** 请求方式 */


var Method;

(function (Method) {
  Method["GET"] = "GET";
  Method["POST"] = "POST";
  Method["PUT"] = "PUT";
  Method["DELETE"] = "DELETE";
  Method["HEAD"] = "HEAD";
  Method["OPTIONS"] = "OPTIONS";
  Method["PATCH"] = "PATCH";
})(Method = exports.Method || (exports.Method = {}));
/** 是否必需 */


var Required;

(function (Required) {
  /** 不必需 */
  Required["false"] = "0";
  /** 必需 */

  Required["true"] = "1";
})(Required = exports.Required || (exports.Required = {}));
/** 请求数据类型 */


var RequestBodyType;

(function (RequestBodyType) {
  /** 查询字符串 */
  RequestBodyType["query"] = "query";
  /** 表单 */

  RequestBodyType["form"] = "form";
  /** JSON */

  RequestBodyType["json"] = "json";
  /** 纯文本 */

  RequestBodyType["text"] = "text";
  /** 文件 */

  RequestBodyType["file"] = "file";
  /** 原始数据 */

  RequestBodyType["raw"] = "raw";
  /** 无请求数据 */

  RequestBodyType["none"] = "none";
})(RequestBodyType = exports.RequestBodyType || (exports.RequestBodyType = {}));
/** 请求路径参数类型 */


var RequestParamType;

(function (RequestParamType) {
  /** 字符串 */
  RequestParamType["string"] = "string";
  /** 数字 */

  RequestParamType["number"] = "number";
})(RequestParamType = exports.RequestParamType || (exports.RequestParamType = {}));
/** 请求查询参数类型 */


var RequestQueryType;

(function (RequestQueryType) {
  /** 字符串 */
  RequestQueryType["string"] = "string";
  /** 数字 */

  RequestQueryType["number"] = "number";
})(RequestQueryType = exports.RequestQueryType || (exports.RequestQueryType = {}));
/** 请求表单条目类型 */


var RequestFormItemType;

(function (RequestFormItemType) {
  /** 纯文本 */
  RequestFormItemType["text"] = "text";
  /** 文件 */

  RequestFormItemType["file"] = "file";
})(RequestFormItemType = exports.RequestFormItemType || (exports.RequestFormItemType = {}));
/** 返回数据类型 */


var ResponseBodyType;

(function (ResponseBodyType) {
  /** JSON */
  ResponseBodyType["json"] = "json";
  /** 纯文本 */

  ResponseBodyType["text"] = "text";
  /** XML */

  ResponseBodyType["xml"] = "xml";
  /** 原始数据 */

  ResponseBodyType["raw"] = "raw"; // yapi 实际上返回的是 json，有另外的字段指示其是否是 json schema

  /** JSON Schema */
  // jsonSchema = 'json-schema',
})(ResponseBodyType = exports.ResponseBodyType || (exports.ResponseBodyType = {}));