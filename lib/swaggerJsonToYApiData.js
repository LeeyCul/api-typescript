"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */

/* eslint-disable no-continue */

/* eslint-disable no-use-before-define */

/* eslint-disable no-param-reassign */

/* eslint-disable no-underscore-dangle */
// @ts-nocheck
// ref: https://github.com/YMFE/yapi/blob/master/exts/yapi-plugin-import-swagger/run.js

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
exports.swaggerJsonToYApiData = void 0;

var dayjs_1 = __importDefault(require("dayjs"));

var swagger_client_1 = __importDefault(require("swagger-client"));

var vtils_1 = require("vtils");

var SwaggerData;
var isOAS3;

function handlePath(path) {
  if (path === '/') return path;

  if (path.charAt(0) !== '/') {
    path = "/".concat(path);
  }

  if (path.charAt(path.length - 1) === '/') {
    path = path.substr(0, path.length - 1);
  }

  return path;
}

function openapi2swagger(data) {
  data.swagger = '2.0';
  (0, vtils_1.each)(data.paths, function (apis) {
    (0, vtils_1.each)(apis, function (api) {
      (0, vtils_1.each)(api.responses, function (res) {
        if (res.content && res.content['application/json'] && _typeof(res.content['application/json']) === 'object') {
          Object.assign(res, res.content['application/json']);
          delete res.content;
        }

        if (res.content && res.content['application/hal+json'] && _typeof(res.content['application/hal+json']) === 'object') {
          Object.assign(res, res.content['application/hal+json']);
          delete res.content;
        }

        if (res.content && res.content['*/*'] && _typeof(res.content['*/*']) === 'object') {
          Object.assign(res, res.content['*/*']);
          delete res.content;
        }
      });

      if (api.requestBody) {
        if (!api.parameters) api.parameters = [];
        var body = {
          type: 'object',
          name: 'body',
          in: 'body'
        };

        try {
          body.schema = api.requestBody.content['application/json'].schema;
        } catch (e) {
          body.schema = {};
        }

        api.parameters.push(body);
      }
    });
  });
  return data;
}

function handleSwaggerData(res) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , new Promise(function (resolve) {
        var data = (0, swagger_client_1.default)({
          spec: res
        });
        data.then(function (res) {
          resolve(res.spec);
        });
      })];
    });
  });
}

function run(res) {
  return __awaiter(this, void 0, void 0, function () {
    var interfaceData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          interfaceData = {
            apis: [],
            cats: [],
            basePath: '',
            swaggerData: {}
          };

          if (typeof res === 'string' && res) {
            try {
              res = JSON.parse(res);
            } catch (e) {
              console.error('json 解析出错', e.message);
            }
          }

          isOAS3 = res.openapi && String(res.openapi).startsWith('3.');

          if (isOAS3) {
            res = openapi2swagger(res);
          }

          return [4
          /*yield*/
          , handleSwaggerData(res)];

        case 1:
          res = _a.sent();
          SwaggerData = res;
          interfaceData.swaggerData = SwaggerData;
          interfaceData.basePath = res.basePath || '';

          if (res.tags && Array.isArray(res.tags)) {
            res.tags.forEach(function (tag) {
              interfaceData.cats.push({
                name: tag.name,
                desc: tag.description
              });
            });
          } else {
            res.tags = [];
          }

          (0, vtils_1.each)(res.paths, function (apis, path) {
            // parameters is common parameters, not a method
            delete apis.parameters;
            (0, vtils_1.each)(apis, function (api, method) {
              api.path = path;
              api.method = method;
              var data = null;

              try {
                data = handleSwagger(api, res.tags);

                if (data.catname) {
                  if (!(0, vtils_1.find)(interfaceData.cats, function (item) {
                    return item.name === data.catname;
                  })) {
                    if (res.tags.length === 0) {
                      interfaceData.cats.push({
                        name: data.catname,
                        desc: data.catname
                      });
                    }
                  }
                }
              } catch (err) {
                data = null;
              }

              if (data) {
                interfaceData.apis.push(data);
              }
            });
          });
          interfaceData.cats = interfaceData.cats.filter(function (catData) {
            var catName = catData.name;
            return (0, vtils_1.find)(interfaceData.apis, function (apiData) {
              return apiData.catname === catName;
            });
          });
          return [2
          /*return*/
          , interfaceData];
      }
    });
  });
}

function handleSwagger(data, originTags) {
  if (originTags === void 0) {
    originTags = [];
  }

  var api = {}; // 处理基本信息

  api.method = data.method.toUpperCase();
  api.title = data.summary || data.path;
  api.desc = data.description;
  api.catname = null;

  if (data.tags && Array.isArray(data.tags)) {
    api.tag = data.tags;

    var _loop_1 = function _loop_1(i) {
      if (/v[0-9.]+/.test(data.tags[i])) {
        return "continue";
      } // 如果根路径有 tags，使用根路径 tags,不使用每个接口定义的 tag 做完分类


      if (originTags.length > 0 && (0, vtils_1.find)(originTags, function (item) {
        return item.name === data.tags[i];
      })) {
        api.catname = data.tags[i];
        return "break";
      }

      if (originTags.length === 0) {
        api.catname = data.tags[i];
        return "break";
      }
    };

    for (var i = 0; i < data.tags.length; i++) {
      var state_1 = _loop_1(i);

      if (state_1 === "break") break;
    }
  }

  api.path = handlePath(data.path);
  api.req_params = [];
  api.req_body_form = [];
  api.req_headers = [];
  api.req_query = [];
  api.req_body_type = 'raw';
  api.res_body_type = 'raw';

  if (data.produces && data.produces.indexOf('application/json') > -1) {
    api.res_body_type = 'json';
    api.res_body_is_json_schema = true;
  }

  if (data.consumes && Array.isArray(data.consumes)) {
    if (data.consumes.indexOf('application/x-www-form-urlencoded') > -1 || data.consumes.indexOf('multipart/form-data') > -1) {
      api.req_body_type = 'form';
    } else if (data.consumes.indexOf('application/json') > -1) {
      api.req_body_type = 'json';
      api.req_body_is_json_schema = true;
    }
  } // 处理response


  api.res_body = handleResponse(data.responses);

  try {
    JSON.parse(api.res_body);
    api.res_body_type = 'json';
    api.res_body_is_json_schema = true;
  } catch (e) {
    api.res_body_type = 'raw';
  } // 处理参数


  function simpleJsonPathParse(key, json) {
    if (!key || typeof key !== 'string' || key.indexOf('#/') !== 0 || key.length <= 2) {
      return null;
    }

    var keys = key.substr(2).split('/');
    keys = keys.filter(function (item) {
      return item;
    });

    for (var i = 0, l = keys.length; i < l; i++) {
      try {
        json = json[keys[i]];
      } catch (e) {
        json = '';
        break;
      }
    }

    return json;
  }

  if (data.parameters && Array.isArray(data.parameters)) {
    data.parameters.forEach(function (param) {
      if (param && _typeof(param) === 'object' && param.$ref) {
        param = simpleJsonPathParse(param.$ref, {
          parameters: SwaggerData.parameters
        });
      }

      var defaultParam = {
        name: param.name,
        desc: param.description,
        type: param.type,
        required: param.required ? '1' : '0'
      };

      if (param.in) {
        switch (param.in) {
          case 'path':
            api.req_params.push(defaultParam);
            break;

          case 'query':
            api.req_query.push(defaultParam);
            break;

          case 'body':
            handleBodyPamras(param.schema, api);
            break;

          case 'formData':
            defaultParam.type = param.type === 'file' ? 'file' : 'text';

            if (param.example) {
              defaultParam.example = param.example;
            }

            api.req_body_form.push(defaultParam);
            break;

          case 'header':
            api.req_headers.push(defaultParam);
            break;

          default:
            break;
        }
      } else {
        api.req_query.push(defaultParam);
      }
    });
  }

  return api;
}

function isJson(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return false;
  }
}

function handleBodyPamras(data, api) {
  api.req_body_other = JSON.stringify(data, null, 2);

  if (isJson(api.req_body_other)) {
    api.req_body_type = 'json';
    api.req_body_is_json_schema = true;
  }
}

function handleResponse(api) {
  var res_body = '';

  if (!api || _typeof(api) !== 'object') {
    return res_body;
  }

  var codes = Object.keys(api);
  var curCode;

  if (codes.length > 0) {
    if (codes.indexOf('200') > -1) {
      curCode = '200';
    } else curCode = codes[0];

    var res = api[curCode];

    if (res && _typeof(res) === 'object') {
      if (res.schema) {
        res_body = JSON.stringify(res.schema, null, 2);
      } else if (res.description) {
        res_body = res.description;
      }
    } else if (typeof res === 'string') {
      res_body = res;
    } else {
      res_body = '';
    }
  } else {
    res_body = '';
  }

  return res_body;
}

function swaggerJsonToYApiData(data) {
  var _a;

  return __awaiter(this, void 0, void 0, function () {
    var yapiData, currentTime, project, cats, interfaces;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , run(data)];

        case 1:
          yapiData = _b.sent(); // 兼容没有分类的情况

          if (!yapiData.cats.length) {
            yapiData.cats = [{
              name: 'default',
              desc: 'default'
            }];
            yapiData.apis.forEach(function (api) {
              api.catname = 'default';
            });
          }

          currentTime = (0, dayjs_1.default)().unix();
          project = {
            _id: 0,
            name: yapiData.swaggerData.info.title,
            desc: yapiData.swaggerData.info.description || '',
            basepath: yapiData.swaggerData.basePath || '',
            tag: [],
            env: [{
              name: 'local',
              domain: "".concat(((_a = yapiData.swaggerData.schemes) === null || _a === void 0 ? void 0 : _a[0]) || 'http', "://").concat(yapiData.swaggerData.host || '127.0.0.1')
            }]
          };
          cats = yapiData.cats.map(function (cat, index) {
            return {
              _id: index + 1,
              name: cat.name,
              desc: cat.desc,
              add_time: currentTime,
              up_time: currentTime
            };
          });
          interfaces = yapiData.apis.map(function (api, index) {
            var _a;

            return __assign(__assign({}, api), {
              _id: index + 1,
              project_id: 0,
              catid: ((_a = cats.find(function (cat) {
                return cat.name === api.catname;
              })) === null || _a === void 0 ? void 0 : _a._id) || -1,
              tag: api.tag || [],
              add_time: currentTime,
              up_time: currentTime
            });
          });
          return [2
          /*return*/
          , {
            project: project,
            cats: cats,
            interfaces: interfaces
          }];
      }
    });
  });
}

exports.swaggerJsonToYApiData = swaggerJsonToYApiData;