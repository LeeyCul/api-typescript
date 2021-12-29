"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepare = exports.parseRequestData = exports.FileData = exports.defineConfig = void 0;
/**
 * 定义配置。
 *
 * @param config 配置
 */

function defineConfig(config) {
  var finnalConfig = __assign({
    serverType: 'yapi',
    serverUrl: 'http://yapi.int.medlinker.com',
    typesOnly: false,
    target: 'typescript',
    prodEnvName: 'local',
    outputFilePath: 'src/api',
    dataKey: 'data',
    jsonSchema: {
      enabled: false
    }
  }, config);

  return finnalConfig;
}

exports.defineConfig = defineConfig;

var FileData =
/** @class */
function () {
  /**
   * 文件数据辅助类，统一网页、小程序等平台的文件上传。
   *
   * @param originalFileData 原始文件数据
   * @param options 若使用内部的 getFormData，则选项会被其使用
   */
  function FileData(originalFileData, options) {
    this.originalFileData = originalFileData;
    this.options = options;
  }
  /**
   * 获取原始文件数据。
   *
   * @returns 原始文件数据
   */


  FileData.prototype.getOriginalFileData = function () {
    return this.originalFileData;
  };
  /**
   * 获取选项。
   */


  FileData.prototype.getOptions = function () {
    return this.options;
  };

  return FileData;
}();

exports.FileData = FileData;
/**
 * 解析请求数据，从请求数据中分离出普通数据和文件数据。
 *
 * @param [requestData] 要解析的请求数据
 * @returns 包含普通数据(data)和文件数据(fileData)的对象，data、fileData 为空对象时，表示没有此类数据
 */

function parseRequestData(requestData) {
  var result = {
    data: {},
    fileData: {}
  };
  /* istanbul ignore else */

  if (requestData != null) {
    if (_typeof(requestData) === 'object' && !Array.isArray(requestData)) {
      Object.keys(requestData).forEach(function (key) {
        if (requestData[key] && requestData[key] instanceof FileData) {
          result.fileData[key] = requestData[key].getOriginalFileData();
        } else {
          result.data[key] = requestData[key];
        }
      });
    } else {
      result.data = requestData;
    }
  }

  return result;
}

exports.parseRequestData = parseRequestData;
/**
 * 准备要传给请求函数的参数。
 */

function prepare(requestConfig, requestData) {
  var requestPath = requestConfig.path;

  var _a = parseRequestData(requestData),
      data = _a.data,
      fileData = _a.fileData;

  var dataIsObject = data != null && _typeof(data) === 'object' && !Array.isArray(data);

  if (dataIsObject) {
    // 替换路径参数
    if (Array.isArray(requestConfig.paramNames) && requestConfig.paramNames.length > 0) {
      Object.keys(data).forEach(function (key) {
        if (requestConfig.paramNames.indexOf(key) >= 0) {
          // ref: https://github.com/YMFE/yapi/blob/master/client/containers/Project/Interface/InterfaceList/InterfaceEditForm.js#L465
          requestPath = requestPath.replace(new RegExp("\\{".concat(key, "\\}"), 'g'), data[key]).replace(new RegExp("/:".concat(key, "(?=/|$)"), 'g'), "/".concat(data[key]));
          delete data[key];
        }
      });
    } // 追加查询参数到路径上


    var queryString_1 = '';

    if (Array.isArray(requestConfig.queryNames) && requestConfig.queryNames.length > 0) {
      Object.keys(data).forEach(function (key) {
        if (requestConfig.queryNames.indexOf(key) >= 0) {
          if (data[key] != null) {
            queryString_1 += "".concat(queryString_1 ? '&' : '').concat(encodeURIComponent(key), "=").concat(encodeURIComponent(data[key]));
          }

          delete data[key];
        }
      });
    }

    if (queryString_1) {
      requestPath += "".concat(requestPath.indexOf('?') > -1 ? '&' : '?').concat(queryString_1);
    }
  } // 全部数据


  var allData = __assign(__assign({}, dataIsObject ? data : {}), fileData); // 获取表单数据


  var getFormData = function getFormData() {
    var useNativeFormData = typeof FormData !== 'undefined';
    var useNodeFormData = !useNativeFormData && // https://github.com/fjc0k/vtils/blob/master/src/utils/inNodeJS.ts
    (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && _typeof(global.process) === 'object' && _typeof(global.process.versions) === 'object' && global.process.versions.node != null;
    var UniFormData = useNativeFormData ? FormData : useNodeFormData ? eval("require('form-data')") : undefined;

    if (!UniFormData) {
      throw new Error('当前环境不支持 FormData');
    }

    var formData = new UniFormData();
    Object.keys(data).forEach(function (key) {
      formData.append(key, data[key]);
    });
    Object.keys(fileData).forEach(function (key) {
      var options = requestData[key].getOptions();
      formData.append(key, fileData[key], useNativeFormData ? options === null || options === void 0 ? void 0 : options.filename : options);
    });
    return formData;
  };

  return __assign(__assign({}, requestConfig), {
    path: requestPath,
    rawData: requestData,
    data: data,
    hasFileData: fileData && Object.keys(fileData).length > 0,
    fileData: fileData,
    allData: allData,
    getFormData: getFormData
  });
}

exports.prepare = prepare;