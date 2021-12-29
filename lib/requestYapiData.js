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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProjectInfo = exports.fetchInterfaceList = exports.fetchExport = exports.fetchProject = exports.fetchApi = void 0;
/* eslint-disable no-underscore-dangle */

/* eslint-disable no-param-reassign */

/**
 * 获取yapi数据
 */

var got_1 = __importDefault(require("got"));

var vtils_1 = require("vtils");

var utils_1 = require("./utils");
/**
 *
 * @param url 请求方法
 * @param query
 * @returns
 */


var fetchApi = function fetchApi(url, query) {
  return __awaiter(this, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , got_1.default.get(url, {
            searchParams: query,
            responseType: 'json',
            https: {
              rejectUnauthorized: false
            }
          })];

        case 1:
          res = _a.sent().body;
          /* istanbul ignore next */

          if (res && res.errcode) {
            (0, utils_1.throwError)(res.errmsg);
          }

          return [2
          /*return*/
          , res.data || res];
      }
    });
  });
};

exports.fetchApi = fetchApi;
/**
 * 获取项目基本信息
 * 缓存
 */

exports.fetchProject = (0, vtils_1.memoize)(function (_a) {
  var serverUrl = _a.serverUrl,
      token = _a.token;
  return __awaiter(void 0, void 0, void 0, function () {
    var projectInfo, basePath;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , (0, exports.fetchApi)("".concat(serverUrl, "/api/project/get"), {
            token: token
          })];

        case 1:
          projectInfo = _b.sent();
          basePath = "/".concat(projectInfo.basepath || '/').replace(/\/+$/, '').replace(/^\/+/, '/');
          projectInfo.basepath = basePath;
          return [2
          /*return*/
          , projectInfo];
      }
    });
  });
}, function (_a) {
  var serverUrl = _a.serverUrl,
      token = _a.token;
  return "".concat(serverUrl, "|").concat(token);
});
/**
 * 通过导出接口获取项目下的所有接口
 */

exports.fetchExport = (0, vtils_1.memoize)(function (_a) {
  var serverUrl = _a.serverUrl,
      token = _a.token;
  return __awaiter(void 0, void 0, void 0, function () {
    var projectInfo, categoryList;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , (0, exports.fetchProject)({
            serverUrl: serverUrl,
            token: token
          })];

        case 1:
          projectInfo = _b.sent();
          return [4
          /*yield*/
          , (0, exports.fetchApi)("".concat(serverUrl, "/api/plugin/export"), {
            type: 'json',
            status: 'all',
            isWiki: 'false',
            token: token
          })];

        case 2:
          categoryList = _b.sent();
          return [2
          /*return*/
          , categoryList.map(function (cat) {
            cat.list = (cat.list || []).map(function (item) {
              item.path = "".concat(projectInfo.basepath).concat(item.path);
              return item;
            });
            return cat;
          })];
      }
    });
  });
}, function (_a) {
  var serverUrl = _a.serverUrl,
      token = _a.token;
  return "".concat(serverUrl, "|").concat(token);
});
/**
 * 获取
 * @param param0
 * @returns
 */

var fetchInterfaceList = function fetchInterfaceList(_a) {
  var serverUrl = _a.serverUrl,
      token = _a.token,
      id = _a.id;
  return __awaiter(this, void 0, void 0, function () {
    var allData, category;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , (0, exports.fetchExport)({
            serverUrl: serverUrl,
            token: token
          })];

        case 1:
          allData = _b.sent();
          category = (allData || []).filter(function (cat) {
            return !(0, vtils_1.isEmpty)(cat) && !(0, vtils_1.isEmpty)(cat.list) && (!id || id && cat.list[0].catid === id);
          });

          if (category) {
            category.forEach(function (interfaceInfo) {
              interfaceInfo._id = interfaceInfo.list[0].catid;
              interfaceInfo.list.forEach(function (item) {
                // 实现 _category 字段
                item._category = (0, vtils_1.omit)(interfaceInfo, ['list']);
              });
            });
          }

          return [2
          /*return*/
          , category];
      }
    });
  });
};

exports.fetchInterfaceList = fetchInterfaceList;
/**
 * 获取项目信息
 * @param syntheticalConfig
 * @returns
 */

var fetchProjectInfo = function fetchProjectInfo(syntheticalConfig) {
  return __awaiter(this, void 0, void 0, function () {
    var projectInfo, projectCats;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , (0, exports.fetchProject)(syntheticalConfig)];

        case 1:
          projectInfo = _a.sent();
          return [4
          /*yield*/
          , (0, exports.fetchApi)("".concat(syntheticalConfig.serverUrl, "/api/interface/getCatMenu"), {
            token: syntheticalConfig.token,
            project_id: projectInfo._id
          })];

        case 2:
          projectCats = _a.sent();
          return [2
          /*return*/
          , __assign(__assign({}, projectInfo), {
            cats: projectCats,
            getMockUrl: function getMockUrl() {
              return "".concat(syntheticalConfig.serverUrl, "/mock/").concat(projectInfo._id);
            },
            getDevUrl: function getDevUrl(devEnvName) {
              var env = projectInfo.env.find(function (e) {
                return e.name === devEnvName;
              });
              return env && env.domain
              /* istanbul ignore next */
              || '';
            },
            getProdUrl: function getProdUrl(prodEnvName) {
              var env = projectInfo.env.find(function (e) {
                return e.name === prodEnvName;
              });
              return env && env.domain
              /* istanbul ignore next */
              || '';
            }
          })];
      }
    });
  });
};

exports.fetchProjectInfo = fetchProjectInfo;