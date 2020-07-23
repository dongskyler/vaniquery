/**
 * A collection of minor helper functions
 */

import fs from 'fs';
import { IfcArgv } from './type';

/**
 * Return a string of copyright notice
 */
const copyrightNotice = ((): string => {
  const thisYear = new Date().getFullYear();
  return `Copyright (c) ${thisYear} Badwater Bay (under MIT license)`;
})();

export { copyrightNotice };

/**
 * Return an array of filenames in a directory
 */
const listAllFilesInDir = (testDir: string): string[] => {
  const testCases: string[] = [];
  fs.readdirSync(testDir)
    .filter((filename) => filename.indexOf('.test.js') >= 0)
    .forEach((f) => {
      testCases.push(f.substr(0, f.indexOf('.test.js')));
    });
  return testCases;
};

export { listAllFilesInDir };

/**
 * Loading a file to stream buffer
 */
const loadFileToBuffer = async (answerKeyFile: string): Promise<string> =>
  new Promise<string>((resolve) => {
    const stream = fs.createReadStream(answerKeyFile);
    stream.on('data', (buffer) => {
      resolve(buffer.toString());
    });
  });

export { loadFileToBuffer };

/**
 * Return filename from argument values
 * @param {IfcArgv} argv
 */
const parseFilename = (argv: IfcArgv): string => argv._[1];

export { parseFilename };

/**
 * Read a file and write to another file
 */
const readPipeWrite = (readFile: string, writeFile: string): void => {
  const readStream = fs.createReadStream(readFile);
  const writeStream = fs.createWriteStream(writeFile);
  readStream.pipe(writeStream);
};

export { readPipeWrite };

/**
 * Save cache file
 */
const saveCacheFile = (argv: IfcArgv): boolean => {
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

export { saveCacheFile };
