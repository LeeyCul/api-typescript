"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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

var __generator = this && this.__generator || function (thisArg, body) {
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var simple_git_1 = __importDefault(require("simple-git"));

var dayjs_1 = __importDefault(require("dayjs"));

var GitRepoInfo =
/** @class */
function () {
  function GitRepoInfo(props) {
    var gitRepoPath = props.gitRepoPath;
    this.gitRepoPath = gitRepoPath || process.cwd();
    this.gitInstance = this.initInstance();
  }

  GitRepoInfo.prototype.initInstance = function () {
    return (0, simple_git_1.default)(this.gitRepoPath);
  };
  /**
   * 获取log日志
   * @returns
   */


  GitRepoInfo.prototype.logs = function () {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.gitInstance.log()];

          case 1:
            result = _a.sent();
            return [2
            /*return*/
            , result];
        }
      });
    });
  };
  /**
   * 获取当前分支
   * @returns
   */


  GitRepoInfo.prototype.branch = function () {
    return __awaiter(this, void 0, void 0, function () {
      var current;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.gitInstance.branch()];

          case 1:
            current = _a.sent().current;
            return [2
            /*return*/
            , current];
        }
      });
    });
  };
  /**
   * 获取距离对应commit的文件变更
   * @param commitId
   * @returns
   */


  GitRepoInfo.prototype.diffSummary = function (commitId) {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.gitInstance.diffSummary(commitId || '')];

          case 1:
            result = _a.sent();
            return [2
            /*return*/
            , result];
        }
      });
    });
  };
  /**
   * git注释信息
   * @returns
   */


  GitRepoInfo.prototype.gitNotesContent = function () {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var branch, _b, latest, _c, all;

      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            return [4
            /*yield*/
            , this.branch()];

          case 1:
            branch = _d.sent();
            return [4
            /*yield*/
            , this.logs()];

          case 2:
            _b = _d.sent(), latest = _b.latest, _c = _b.all, all = _c === void 0 ? [] : _c;
            return [2
            /*return*/
            , "\n    /**\n     * Created By api-typescript\n     * https://wiki.medlinker.com/pages/viewpage.action?pageId=45573691\n     *\n     * repo: ".concat(this.gitRepoPath, "\n     * branch: ").concat(branch, "\n     * commitId: ").concat((latest === null || latest === void 0 ? void 0 : latest.hash) || ((_a = all[0]) === null || _a === void 0 ? void 0 : _a.hash) || '', "\n     * updateTime: ").concat((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), "\n     */\n    ")];
        }
      });
    });
  };

  return GitRepoInfo;
}();

exports.default = GitRepoInfo;