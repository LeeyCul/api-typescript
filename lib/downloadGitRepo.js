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

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
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
exports.start = exports.mapFile = exports.download = exports.getDownloadTargetPath = void 0;

var fs_extra_1 = __importDefault(require("fs-extra"));

var child_process_1 = require("child_process");

var path_1 = __importDefault(require("path"));

var conso = __importStar(require("./console"));

var defautlGitRepo = 'https://git.medlinker.com/foundations/api-swagger.git';
/**
 * 获取下载的目录目录
 * @param props
 * @returns
 */

function getDownloadTargetPath(props) {
  var _a = props.repository,
      repository = _a === void 0 ? defautlGitRepo : _a,
      _b = props.dest,
      dest = _b === void 0 ? '/tmp' : _b;
  var dirName = (repository.match(/\/([^/.]+)(\.git)?$/) || [])[1] || 'api-swagger';
  var target = path_1.default.join(dest, dirName);
  return target;
}

exports.getDownloadTargetPath = getDownloadTargetPath;
/**
 * 从json仓库下载接口定义json
 * @param props
 * @returns
 */

function download(props) {
  var _a = props.repository,
      repository = _a === void 0 ? defautlGitRepo : _a,
      _b = props.dest,
      dest = _b === void 0 ? '/tmp' : _b,
      _c = props.branch,
      branch = _c === void 0 ? 'master' : _c;
  var url = "".concat(repository.replace(/#(\w+)?$/, ''), "#").concat(branch);

  try {
    var target = getDownloadTargetPath(props);
    var gitHEADPath = path_1.default.resolve(target, '.git/HEAD');

    if (!fs_extra_1.default.pathExistsSync(target) || !fs_extra_1.default.existsSync(gitHEADPath)) {
      // 可能存在.git文件下的信息丢失的情况，如果丢失就删除后，重新clone
      (0, child_process_1.execSync)("rm -rf ".concat(target));
      (0, child_process_1.execSync)("cd ".concat(dest, " && git clone ").concat(repository));
      (0, child_process_1.execSync)("cd ".concat(target, " && git checkout ").concat(branch, " && git pull origin ").concat(branch));
    } else {
      (0, child_process_1.execSync)("cd ".concat(target, " && git checkout ").concat(branch, " && git pull origin ").concat(branch));
    }

    return Promise.resolve({
      target: target,
      repository: url
    });
  } catch (e) {
    conso.error(e);
    return Promise.reject(e);
  }
}

exports.download = download;
/**
 * 遍历文件
 * @param target
 * @returns
 */

function mapFile(target) {
  var files = fs_extra_1.default.readdirSync(target);
  return files.map(function (item) {
    var tp = path_1.default.resolve(target, item);
    var fileInfo = fs_extra_1.default.statSync(tp);
    var ifDir = fileInfo.isDirectory();

    if (ifDir) {
      return mapFile(tp);
    } // 只需要json文件


    if (item.match(/\.json$/)) {
      return tp;
    }

    return null;
  });
}

exports.mapFile = mapFile;

function start(props) {
  return __awaiter(this, void 0, void 0, function () {
    var target, jsonFilePaths, renderPaths;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , download(props)];

        case 1:
          target = _a.sent().target;
          jsonFilePaths = mapFile(target);
          renderPaths = jsonFilePaths.flat(Infinity).reduce(function (list, item, index) {
            if (item) {
              var renderPath = item.replace(target, '');

              var _a = path_1.default.parse(renderPath),
                  ext = _a.ext,
                  name_1 = _a.name,
                  base = _a.base,
                  dir = _a.dir;

              var fname = name_1.replace(/\.swagger$/, '');
              list.push({
                name: fname,
                dir: dir,
                base: base,
                outPath: path_1.default.join(dir, fname),
                jsonFilePath: item
              });
            }

            return list;
          }, []); // console.log(target, renderPaths);

          return [2
          /*return*/
          , {
            jsonFileDir: target,
            renderPaths: renderPaths,
            jsonFilePaths: jsonFilePaths
          }];
      }
    });
  });
}

exports.start = start;
exports.default = start;