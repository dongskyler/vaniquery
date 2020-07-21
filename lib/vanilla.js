const fs = require('fs');
const equivalentsLib = require('./equivalentsLib.js');

module.exports = (argv) => {
  try {
    console.log(argv);
    const file = argv._[1];

    if ('cache' in argv && argv.cache === true) {
      const readStream = fs.createReadStream(file);
      const writeStream = fs.createWriteStream(`${file}.vaniquerycache`);
      readStream.pipe(writeStream);
    }

    equivalentsLib.forEach((equi) => {
      const stream = fs.createReadStream(file);
      stream.on('data', (buffer) => {
        const result = buffer.toString().replace(equi.jquery, equi.vanilla);
        fs.writeFile(file, result, 'utf8', (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
};
