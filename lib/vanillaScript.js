const fs = require('fs');
const equivalentsLib = require('./equivalentsLib.js');

module.exports = (file) => {
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
};
