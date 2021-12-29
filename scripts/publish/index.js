#!/usr/bin/env node

const inquirer = require('inquirer')
const handleInputVersion = require('./handleInputVersion')
const semver = require('semver')
const git = require('simple-git')()
const publish = require('./publish')
const Chalk = require('chalk')
const debug = require('./debug')

inquirer
  .prompt([
    {
      type: 'list',
      name: 'packageName',
      message: '请选择需要发布的项目：',
      choices: ['api-typescript'],
      when: async function () {
        try {
          const res = await git.status()
          if (res.files.length > 0) {
            console.error(Chalk.red(`Error: 存在未提交的文件，请先提交所有文件后再执行发布命令`))

            process.exit()
          }

          return true
        } catch (err) {
          console.log(Chalk.red(`Error: ${err.message}`))
          process.exit()
        }
      },
    },
    {
      type: 'list',
      name: 'releaseType',
      message: '请选择发布的版本类型：',
      choices: [
        new inquirer.Separator('--- 正式版 ---'),
        'Major',
        'Minor',
        'Patch',
        new inquirer.Separator('--- 预发布 ---'),
        'Premajor',
        'Preminor',
        'Prepatch',
        'Prerelease',
      ],
      filter: function (value) {
        return value.toLowerCase()
      },
    },
    {
      type: 'list',
      name: 'preId',
      message: '请选择预发版本标识：',
      choices: ['Alpha', 'Beta', 'Canary'],
      when: function (answers) {
        return answers.releaseType.startsWith('pre')
      },
      filter: function (value) {
        return value.toLowerCase()
      },
    },
    {
      type: 'input',
      name: 'version',
      message: '请输入发布的版本号：',
      default: handleInputVersion,
      validate: function (value) {
        if (semver.valid(value) !== null) {
          return true
        }

        return '请使用正确的格式输入版本号，eg: 1.2.3，1.2.3-alpha.0'
      },
    },
  ])
  .then((answers) => {
    debug('answers: ', answers)

    publish(answers)
  })
