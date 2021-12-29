"use strict";
/**
 * 生成入口文件
 */

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOutputFilePath = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

var path_1 = __importDefault(require("path"));

var getOutputFilePath = function getOutputFilePath(config, file) {
  var _a = path_1.default.parse(config.outputFilePath || ''),
      dir = _a.dir,
      name = _a.name;

  return path_1.default.join(dir, name, file);
};

exports.getOutputFilePath = getOutputFilePath;