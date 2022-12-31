#! /usr/bin/env node
/* eslint-env node */

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const child_process = require('child_process');
const inquirer = require('inquirer');
const expression = '../@(@react|@vue|@uniapp|@rn)/!(shared|types)/package.json';
const files = glob.sync(path.join(__dirname, expression));
const projects = {};

files.forEach((file) => {
  const json = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const cd = `cd ${path.join(__dirname, '../')}`;
  const run = `pnpm -F ${json.name} ${process.argv[2] || 'dev'}`;
  projects[json.name] = `${cd} && ${run}`;
});

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'name',
      message: '请选择要运行的项目',
      choices: Object.keys(projects),
    },
  ])
  .then((answers) => {
    console.log(`正在使用 "${projects[answers.name]}"启动 ${answers.name} 服务`);
    const child = child_process.spawn(projects[answers.name], {
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });
    console.log('进程id:' + child.pid);
  });
