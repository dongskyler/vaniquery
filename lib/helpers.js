/**
 * A collection of minor helper functions
 */

const fs = require('fs');

/**
 * Return a string of copyright notice
 */
const copyrightNotice = (() => {
  const thisYear = new Date().getFullYear();
  return `Copyright (c) ${thisYear} Badwater Bay (under MIT license)`;
})();

exports.copyrightNotice = copyrightNotice;

/**
 * Return an array of filenames in a directory
 * @param {string} testDir
 */
const listAllFilesInDir = (testDir) => {
  const testCases = [];
  fs.readdirSync(testDir).forEach((filename) => {
    testCases.push(filename.substr(0, filename.indexOf('.test.js')));
  });
  return testCases;
};

exports.listAllFilesInDir = listAllFilesInDir;

/**
 * Loading a file to stream buffer
 * @param {string} answerKeyFile
 */
const loadFileToBuffer = async (answerKeyFile) => {
  return new Promise((resolve) => {
    const stream = fs.createReadStream(answerKeyFile);
    stream.on('data', (buffer) => {
      resolve(buffer.toString());
    });
  });
};

exports.loadFileToBuffer = loadFileToBuffer;

/**
 * Return filename from argument values
 * @param {Object} argv
 */
const parseFilename = (argv) => argv._[1];

exports.parseFilename = parseFilename;

/**
 * Read a file and write to another file
 * @param {string} readFile
 * @param {string} writeFile
 */
const readPipeWrite = (readFile, writeFile) => {
  const readStream = fs.createReadStream(readFile);
  const writeStream = fs.createWriteStream(writeFile);
  readStream.pipe(writeStream);
};

exports.readPipeWrite = readPipeWrite;

/**
 * Save cache file
 * @param {Object} argv
 */
const saveCacheFile = (argv) => {
  try {
    const file = parseFilename(argv);
    const cacheFile = `${file}.vaniquerycache`;
    readPipeWrite(file, cacheFile);
    console.log('Cache file saved.');
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

exports.saveCacheFile = saveCacheFile;
