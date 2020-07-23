/**
 * Vanillaize a file
 */

const fs = require('fs');
const equivalentsLib = require('./equivalentsLib.js');
const { parseFilename, saveCacheFile } = require('./helpers');

/**
 * Vanillaize a file
 * @param {Object} argv
 */
exports.vanilla = (argv) => {
  try {
    const file = parseFilename(argv);
    console.log(`Vanillaizing '${file}'...`);

    if (!(!('cache' in argv) && 'noCache' in argv && argv.noCache === true)) {
      const cacheSaved = saveCacheFile(argv);
      if (!cacheSaved) {
        console.error(
          'Something went wrong when saving cache file. Aborting vanillaization.'
        );
        return false;
      }
    }

    const result = new Promise((resolve, reject) => {
      try {
        const stream = fs.createReadStream(file);
        stream.on('data', (buffer) => {
          let content = buffer;
          equivalentsLib.forEach((eq) => {
            if ('verbose' in argv && argv.verbose === true) {
              console.log(`Vanillaizing ${eq.name}...`);
            }

            content = content.toString().replace(eq.jquery, eq.vanilla);
          });
          resolve(content);
        });
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });

    return result;
  } catch (err) {
    console.error(err);
    return false;
  }
};

/**
 * Write vanillaized result to file
 * @param {Object} argv
 * @param {string} result
 */
exports.vanillaOut = (argv, result) => {
  try {
    const file = parseFilename(argv);
    fs.writeFile(file, result, 'utf8', (err) => {
      if (err) {
        console.error('Something went wrong when writing vanillaized file.');
        console.error(err);
        return false;
      }
      console.log('Vanillaization finished.');
      return true;
    });
  } catch (err) {
    console.error('Something went wrong when writing vanillaized file.');
    console.error(err);
    return false;
  }
  return false;
};
