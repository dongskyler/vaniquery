/**
 * Revert changes of vanillaizing a file, if its cached file is present
 */

const fs = require('fs');

module.exports = (argv) => {
  try {
    console.log(argv);

    const file = argv._[1];
    const cachedFile = `${file}.vaniquerycache`;

    if (fs.existsSync(cachedFile)) {
      const readStream = fs.createReadStream(cachedFile);
      const writeStream = fs.createWriteStream(file);
      readStream.pipe(writeStream);
      fs.unlinkSync(cachedFile);
    } else {
      console.log('Cannot revert changes due to missing cached file.');
    }
  } catch (err) {
    console.error(err);
  }
};
