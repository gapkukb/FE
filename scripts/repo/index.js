const inquirer = require('inquirer');
const path = require('path');
const repo = require('./repo.json');
const child_process = require('child_process');

let repos = {};
for (const [key, value] of Object.entries(repo)) {
  for (const [subKey, subValue] of Object.entries(value)) {
    const mononame = key + '/' + subKey;
    repos[mononame] = {
      parent: key,
      name: subKey,
      url: subValue,
      command: `cd ${path.join(process.cwd(), key)} && git clone ${subValue} ${subKey} && cd ${process.cwd()} && pnpm -F ${mononame} i && dev`,
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
    console.log(`\x1B[46m--------------------- 正在执行以下命令：---------------------\x1B[0m`);
    console.log(current.command);
    child_process.spawn(current.command, {
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });
  });
