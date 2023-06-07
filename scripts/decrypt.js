const fs = require('fs');
const MiniZip = require('minizip-asm.js');

(async () => {

  const { PASSWORD } = process.env;
  if (!PASSWORD) {
    throw new Error(`The PASSWORD environment variable must be set.`);
  }

  const mz = new MiniZip(fs.readFileSync('solutions.zip'));

  for (const { filepath } of mz.list()) {
    const contents = mz.extract(filepath, {
      encoding: 'utf8',
      password: PASSWORD,
    });
    fs.writeFileSync(filepath, contents);
  }

  console.log('Done.');

})();