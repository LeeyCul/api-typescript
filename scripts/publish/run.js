const util = require('util')
const exec = util.promisify(require('child_process').exec)

/**
 * 运行命令
 *
 * @param {*} text 命令内容
 * @param {boolean} [showStdout=false] 是否展示 stdout 内容
 * @return {*}
 */
const run = async (text, showStdout = false) => {
  const { stderr, stdout } = await exec(text)

  if (showStdout) {
    console.log('\n' + stdout)
  }

  return stdout
}

module.exports = run
