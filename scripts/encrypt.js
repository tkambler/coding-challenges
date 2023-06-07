const path = require('path');
const fs = require('fs');
const MiniZip = require('minizip-asm.js');
const { sync: glob } = require('glob');

(async () => {

  const { PASSWORD } = process.env;
  if (!PASSWORD) {
    throw new Error(`The PASSWORD environment variable must be set.`);
  }

  const mz = new MiniZip();

  const solutions = glob('**/solution.js', {
    cwd: path.resolve(__dirname, '..'),
  });

  for (const solution of solutions) {
    const content = fs.readFileSync(solution, 'utf-8');
    mz.append(solution, content, {
      password: PASSWORD,
    });
  }

  fs.writeFileSync('solutions.zip', Buffer.from(mz.zip()));

  for (const solution of solutions) {
    fs.unlinkSync(solution);
  }

  console.log('Done.');

})();