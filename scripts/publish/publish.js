const run = require('./run');
const path = require('path');
const fs = require('fs');
const Ora = require('ora');
const git = require('simple-git')();

const spinner = new Ora({
  discardStdin: false,
  text: '构建发布中。。。',
  spinner: 'dots'
});

/**
 * 发布命令
 *
 * @param {*} packageName 包名称
 * @param {*} version 要发布的版本号
 */
async function publish(answers) {
  const { version, preId } = answers;
  const packageName = 'api-typescript';

  const targetPackageJson = path.resolve(__dirname,'../../package.json');

  const json = JSON.parse(fs.readFileSync(targetPackageJson, 'utf-8'));

  json.name = packageName;
  json.version = version;
  json.publishConfig.registry = 'http://nexus.medlinker.com/repository/local-npm/';

  fs.writeFileSync(targetPackageJson, JSON.stringify(json, null, 2), 'utf-8');

  let publishCommand = `npm run build && npm publish`;

  if (preId) {
    publishCommand += ` --tag ${preId}`;
  }

  try {
    spinner.start();

    await run(publishCommand, true);

    await git.checkout('.');

    spinner.succeed('发布成功');
  } catch (err) {
    spinner.fail(err.message);
  }
}

module.exports = publish;
