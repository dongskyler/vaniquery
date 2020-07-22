/**
 * Revert changes of vanillaizing a file, if its cached file is present
 * @param {Object} argv
 */

const fs = require('fs');

module.exports = (argv) => {
  try {
    console.log('Reverting vanillaization...');

    const file = argv._[1];
    const cachedFile = `${file}.vaniquerycache`;

    if (fs.existsSync(cachedFile)) {
      const revertFile = new Promise((resolve, reject) => {
        try {
          const readStream = fs.createReadStream(cachedFile);
          const writeStream = fs.createWriteStream(file);
          readStream.pipe(writeStream);
          resolve();
        } catch (err) {
          console.error(err);
          reject();
        }
      });

      revertFile.then(fs.unlinkSync(cachedFile)).catch((err) => {
        console.error('Something went wrong during reverting vanillaization.');
        console.error(err);
      });
      console.log('Reverting vanillaization finished.');
    } else {
      console.log('No cache file found. Cannot revert vanillaization.');
    }
  } catch (err) {
    console.error(err);
  }
};
