#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
// import CLI from '../src/cli';
// new CLI().run(process.argv.slice(2));

// import '../src/checkGitRepoChangedFiles';
const fileContent = fs.readFileSync(
  '/Users/huzhongchun/medlinker/network-request-sdk/packages/api-typescript/src/api/index.ts',
  { encoding: 'utf-8' }
);

// console.log(fileContent);

// 清除顶部日志信息
const c = fileContent.replace(/\/\/(\s+)?<-Logs->(.|\n)+\/\/(\s+)?<-END->/, '');
console.log(c);

// const { name, dir } = path.parse('med-common/base-interface/http/v1/area.swagger.json');
// const fname = name.replace(/\.swagger$/, '');
// console.log(path.join('/', dir, fname));
