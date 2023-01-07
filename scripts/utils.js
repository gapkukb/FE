const child_process = require('child_process');

exports.exec = function (command) {
  console.log(`\x1B[46m--------------------- 正在执行命令：---------------------\x1B[0m`);
  return child_process.spawn(command, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
};
