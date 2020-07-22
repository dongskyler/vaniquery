/**
 * Vanillaize a file
 */

const fs = require('fs');
const equivalentsLib = require('./equivalentsLib.js');

/**
 * Get filename from argument values
 * @param {Object} argv
 */
const parseFilename = (argv) => argv._[1];

/**
 * Create cache file
 * @param {Object} argv
 */
const saveCacheFile = (argv) => {
  try {
    const file = parseFilename(argv);
    const readStream = fs.createReadStream(file);
    const writeStream = fs.createWriteStream(`${file}.vaniquerycache`);
    readStream.pipe(writeStream);
    console.log('Cache file saved.');
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

/**
 * Vanillaize a file
 * @param {Object} argv
 */
exports.vanilla = (argv) => {
  try {
    const file = parseFilename(argv);
    console.log(`Vanillaizing '${file}'...`);

    if (!(!('cache' in argv) && 'noCache' in argv && argv.noCache === true)) {
      saveCacheFile(argv);
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
        throw err;
      }
    });
    console.log('Vanillaization finished.');
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
