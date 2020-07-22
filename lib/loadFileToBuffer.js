/**
 * Loading a file to stream buffer
 * @param {string} answerKeyFile
 */

const fs = require('fs');

module.exports = async (answerKeyFile) => {
  return new Promise((resolve) => {
    const stream = fs.createReadStream(answerKeyFile);
    stream.on('data', (buffer) => {
      resolve(buffer.toString());
    });
  });
};
