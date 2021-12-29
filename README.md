# api-swagger

基于 Yapi 或 Swagger，生成接口的 reques、response 类型声明和请求方法体

## 使用

`yarn apits init` 或者直接配置到scripts里面运行

```
"scripts": {
    "apits:init": "apits init",
    "apits:gen": "apits gen"
  },
```
即可生成apits.config.ts配置文件，
```
import { defineConfig } from "api-swagger";

export default defineConfig({
  serverType: "swagger",
  serverUrl: "http://47.xx.xx.10:8888/v2/api-docs",//swagger地址
  topImportPkgTemplate: ()=>`import request from 'axios'`, // 项目内请求库
  outputFilePath: "src/api", // 输出路径
  proxyInterface: {
    path: ''
  } // 配置代理
});

```
## run
运行 apits:gen即可生成
#### ps: 如需要多域名请求请配置baseURL

```
import { defineConfig } from 'api-swagger';

export default defineConfig({
  serverType: 'swagger',
  serverUrl: 'http://47.113.xx.xx:8888/v2/api-docs',
  topImportPkgTemplate: () => 'import request from \'@/common/utils/request\'; import * as hosts from \'@/common/utils/aa\'',
  outputFilePath: 'src/api',
  projects: {
    baseURL: '[code]:hosts.GENERAL',
  },
});

```

## yipi模式配置

```
import { defineConfig } from 'api-swagger';

export default defineConfig({
  projects: {
    token: '140be2645d0b03c39c0137df5eb64ffbe039aec37fe1336221825dcc8d85007a', // yapi项目的token
    categories: [ // 项目分类id
      {
        id: 6853,
        filter: ['生成指定该模块下的api地址']
      },
    ],
    baseURL: `[code]:hosts.GENERAL`,
  },
  topImportPkgTemplate: () => {
    return `import request from 'axios'
  },
});

```



