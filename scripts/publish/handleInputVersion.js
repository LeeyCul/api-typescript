const run = require('./run')
const Ora = require('ora')
const semver = require('semver')
const debug = require('./debug')

const spinner = new Ora({
  discardStdin: false,
  text: '获取版本号',
  spinner: 'dots',
})

/**
 * 显示包 tag 的列表
 *
 * @param {*} packageName 包名称
 */
const getShowPackageTagCommand = (packageName) =>
  `npm dist-tag ls ${packageName} --registry=http://nexus.medlinker.com/repository/group-npm/`

const handleInputVersion = async (answerMap) => {
  debug('answerMap: ', answerMap)
  let defaultVersion

  spinner.start()
  const res = await run(getShowPackageTagCommand(answerMap['packageName']))
  spinner.succeed()

  //                                                                { alpha: 0.0.1-alpha.0
  // alpha: 0.0.1-alpha.0\nbeta: 0.0.1-beta.0\nlatest: 0.0.1 =>      beta: 0.0.1-beta.0
  //                                                                 latest: 0.0.1 }
  const versionMap = res
    .split('\n')
    .filter(Boolean)
    .reduce((prev, current) => {
      const arr = current.split(':')
      prev[arr[0].trim()] = arr[1].trim()
      return prev
    }, {})

  debug('versionMap: ', versionMap)

  const {
    latest: latestVersion = '0.0.0',
    [answerMap.preId]: latestPrereleaseVersion = latestVersion,
  } = versionMap

  debug('latestVersion: ', latestVersion)
  debug('latestPrereleaseVersion: ', latestPrereleaseVersion)

  if (!answerMap.releaseType.startsWith('pre')) {
    // 正式版本
    defaultVersion = semver.inc(latestVersion, answerMap.releaseType)
  } else {
    // 预发版本
    const targetVersion = semver.gte(latestVersion, latestPrereleaseVersion)
      ? latestVersion
      : versionMap[answerMap.preId]

    debug('targetVersion:', targetVersion)

    defaultVersion = semver.inc(targetVersion, answerMap.releaseType, answerMap.preId)
  }

  return defaultVersion
}

module.exports = handleInputVersion
