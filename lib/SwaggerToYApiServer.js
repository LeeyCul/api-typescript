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
exports.SwaggerToYApiServer = void 0;
/* eslint-disable no-underscore-dangle */

var get_port_1 = __importDefault(require("get-port"));

var got_1 = __importDefault(require("got"));

var http_1 = __importDefault(require("http"));

var signal_exit_1 = __importDefault(require("signal-exit"));

var url_1 = __importDefault(require("url"));

var vtils_1 = require("vtils");

var swaggerJsonToYApiData_1 = require("./swaggerJsonToYApiData");

var SwaggerToYApiServer =
/** @class */
function () {
  function SwaggerToYApiServer(options) {
    this.options = options;
    this.port = 0;
    this.swaggerJson = {};
    this.httpServer = null;
    this.yapiData = {};
  }

  SwaggerToYApiServer.prototype.getPort = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!(this.port === 0)) return [3
            /*break*/
            , 2];
            _a = this;
            return [4
            /*yield*/
            , (0, get_port_1.default)({
              port: 50505
            })];

          case 1:
            _a.port = _b.sent();
            _b.label = 2;

          case 2:
            return [2
            /*return*/
            , this.port];
        }
      });
    });
  };

  SwaggerToYApiServer.prototype.getUrl = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = "http://127.0.0.1:".concat;
            return [4
            /*yield*/
            , this.getPort()];

          case 1:
            return [2
            /*return*/
            , _a.apply("http://127.0.0.1:", [_b.sent()])];
        }
      });
    });
  };

  SwaggerToYApiServer.prototype.getSwaggerJson = function () {
    return __awaiter(this, void 0, void 0, function () {
      var res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(0, vtils_1.isEmpty)(this.swaggerJson)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , got_1.default.get(this.options.swaggerJsonUrl, {
              responseType: 'json'
            })];

          case 1:
            res = _a.sent();
            this.swaggerJson = res.body;
            _a.label = 2;

          case 2:
            return [2
            /*return*/
            , this.swaggerJson];
        }
      });
    });
  };

  SwaggerToYApiServer.prototype.getYApiData = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!(0, vtils_1.isEmpty)(this.yapiData)) return [3
            /*break*/
            , 3];
            _a = this;
            _b = swaggerJsonToYApiData_1.swaggerJsonToYApiData;
            return [4
            /*yield*/
            , this.getSwaggerJson()];

          case 1:
            return [4
            /*yield*/
            , _b.apply(void 0, [_c.sent()])];

          case 2:
            _a.yapiData = _c.sent();
            _c.label = 3;

          case 3:
            return [2
            /*return*/
            , this.yapiData];
        }
      });
    });
  };

  SwaggerToYApiServer.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      var yapiData;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.getYApiData()];

          case 1:
            yapiData = _a.sent(); // eslint-disable-next-line no-async-promise-executor

            return [4
            /*yield*/
            , new Promise(function (resolve) {
              return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, _c;

                var _this = this;

                return __generator(this, function (_d) {
                  switch (_d.label) {
                    case 0:
                      _a = this;
                      _c = (_b = http_1.default.createServer(function (req, res) {
                        return __awaiter(_this, void 0, void 0, function () {
                          var pathname;
                          return __generator(this, function (_a) {
                            pathname = url_1.default.parse(req.url || '').pathname;
                            res.setHeader('Content-Type', 'application/json');

                            if (pathname.includes('/api/plugin/export')) {
                              res.end(JSON.stringify(yapiData.cats.map(function (cat) {
                                return __assign(__assign({}, cat), {
                                  list: yapiData.interfaces.filter(function (item) {
                                    return item.catid === cat._id;
                                  })
                                });
                              })));
                            } else if (pathname.includes('/api/interface/getCatMenu')) {
                              res.end(JSON.stringify({
                                errcode: 0,
                                errmsg: '成功！',
                                data: yapiData.cats
                              }));
                            } else if (pathname.includes('/api/project/get')) {
                              res.end(JSON.stringify({
                                errcode: 0,
                                errmsg: '成功！',
                                data: yapiData.project
                              }));
                            } else {
                              res.end('404');
                            }

                            return [2
                            /*return*/
                            ];
                          });
                        });
                      })).listen;
                      return [4
                      /*yield*/
                      , this.getPort()];

                    case 1:
                      _a.httpServer = _c.apply(_b, [_d.sent(), '127.0.0.1', function () {
                        (0, signal_exit_1.default)(function () {
                          return _this.stop();
                        });
                        resolve();
                      }]);
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            })];

          case 2:
            // eslint-disable-next-line no-async-promise-executor
            _a.sent();

            return [2
            /*return*/
            , this.getUrl()];
        }
      });
    });
  };

  SwaggerToYApiServer.prototype.stop = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve, reject) {
          if (!_this.httpServer) {
            resolve();
          } else {
            _this.httpServer.close(function (err) {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          }
        })];
      });
    });
  };

  return SwaggerToYApiServer;
}();

exports.SwaggerToYApiServer = SwaggerToYApiServer;