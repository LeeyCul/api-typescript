"use strict";

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
exports.table = exports.success = exports.tips = exports.warn = exports.info = exports.error = exports.log = void 0;

var consola_1 = __importDefault(require("consola"));

var chalk_1 = __importDefault(require("chalk"));
/**
 * 普通提示
 * @param message
 * @param args
 */


function log(message) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  consola_1.default.log.apply(consola_1.default, __spreadArray([message], args, false));
}

exports.log = log;
/**
 * 错误提示
 * @param message
 * @param args
 */

function error(message) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  consola_1.default.error.apply(consola_1.default, __spreadArray([chalk_1.default.magenta(message)], args, false));
}

exports.error = error;
/**
 * 信息提示
 * @param message
 * @param args
 */

function info(message) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  consola_1.default.info.apply(consola_1.default, __spreadArray([chalk_1.default.yellowBright(message)], args, false));
}

exports.info = info;
/**
 * 警告信息提示
 * @param message
 * @param args
 */

function warn(message) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  consola_1.default.warn.apply(consola_1.default, __spreadArray([chalk_1.default.blue(message)], args, false));
}

exports.warn = warn;
/**
 * 弱提示
 * @param message
 * @param args
 */

function tips(message) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  consola_1.default.log.apply(consola_1.default, __spreadArray([chalk_1.default.yellow("-> ".concat(message))], args, false));
}

exports.tips = tips;
/**
 * 成功提示
 * @param message
 * @param args
 */

function success(message) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  consola_1.default.success.apply(consola_1.default, __spreadArray([chalk_1.default.cyan(message)], args, false));
}

exports.success = success;
/**
 * table展示信息
 * @param tabularData
 * @param properties
 */

function table(tabularData, properties) {
  // eslint-disable-next-line no-console
  console.table(tabularData, properties);
}

exports.table = table;