/**
 * Revert changes of vanillaizing a file, if its cached file is present
 */

const fs = require('fs');
const { parseFilename, readPipeWrite } = require('./helpers');

/**
 * @param {Object} argv
 */
exports.revert = (argv) => {
  try {
    console.log('Reverting vanillaization...');

    const file = parseFilename(argv);
    const cacheFile = `${file}.vaniquerycache`;

    if (fs.existsSync(cacheFile)) {
      const revertFile = new Promise((resolve, reject) => {
        try {
          readPipeWrite(cacheFile, file);
          resolve();
        } catch (err) {
          console.error(err);
          reject();
        }
      });

      revertFile
        .then(() => {
          fs.unlinkSync(cacheFile);
          return true;
        })
        .catch((err) => {
          console.error(
            'Something went wrong during reverting vanillaization.'
          );
          console.error(err);
          return false;
        })
        .finally(console.log('Reverting vanillaization finished.'));
    } else {
      console.log('No cache file found. Cannot revert vanillaization.');
      return false;
    }
  } catch (err) {
    console.error('Something went wrong during reverting vanillaization.');
    console.error(err);
    return false;
  }
  return false;
};
