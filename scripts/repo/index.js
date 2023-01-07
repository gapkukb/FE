const inquirer = require('inquirer');
const path = require('path');
const repo = require('./repo.json');
const { exec } = require('../utils');

let repos = {};
for (const [key, value] of Object.entries(repo)) {
  for (const [subKey, subValue] of Object.entries(value)) {
    const mononame = key + '/' + subKey;
    repos[mononame] = {
      parent: key,
      name: subKey,
      url: subValue,
      command: `cd ${path.join(
        process.cwd(),
        key
      )} && git clone ${subValue} ${subKey} && cd ${process.cwd()} && pnpm -F ${mononame} i && dev`,
    };
  }
}

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'name',
      message: '请选择要克隆的项目',
      choices: Object.keys(repos),
    },
  ])
  .then(({ name }) => {
    const current = repos[name];
    exec(current.command);
  });
