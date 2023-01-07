#! /usr/bin/env node
/* eslint-env node */

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const { exec } = require('./utils');
const inquirer = require('inquirer');
const files = glob.sync('@vue/!(shared|types)/package.json');
const projects = [];
// 获取命令行的参数
const arg = process.argv[2] || 'dev';
const isReinstall = arg === 'reinstall';

function command(next) {
  return `cd ${process.cwd()} &&  ${next}`;
}

files.forEach((file) => {
  const json = JSON.parse(fs.readFileSync(file, 'utf-8'));

  let _command;
  if (isReinstall) {
    const _path = path.basename(path.join(process.cwd(), file));
    _command = command(`npx rimraf ${_path}/node_modules/ && pnpm i`);
  } else {
    _command = command(`pnpm -F ${json.name} ${arg}`);
  }
  projects.push({
    name: json.name,
    command: _command,
  });
});

if (isReinstall) {
  projects.unshift({
    name: '全部',
    command: command(`npx rimraf /node_modules/ && rimraf (@vue|@react)/node_modules/  && pnpm i`),
  });
}

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'name',
      message: '请选择要运行的项目',
      choices: projects.map((item) => item.name),
    },
  ])
  .then((answers) => {
    // console.log(`正在使用 "${projects[answers.name]}"启动 ${answers.name} 服务`);
    const project = projects.find((item) => item.name === answers.name);
    const child = exec(project.command);
    console.log('进程id:' + child.pid);
  });
