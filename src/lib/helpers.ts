/**
 * A collection of minor helper functions
 */

import fs from 'fs';
import { IfcArgv } from './type';

/**
 * Return filename from argument values
 * @param argv
 */
const parseFilename = (argv: IfcArgv): string => argv._[1];
export { parseFilename };

/**
 * Return a string of copyright notice
 */
const copyrightNotice = (): string => {
  const thisYear = new Date().getFullYear();
  return `Copyright (c) ${thisYear} Badwater Bay (under MIT license)`;
};
export { copyrightNotice };

/**
 * Return an array of filenames in a directory
 * @param testDir
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
 * @param answerKeyFile
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
 * Read a file and write to another file
 * @param readFile
 * @param writeFile
 */
const readPipeWrite = (readFile: string, writeFile: string): void => {
  const readStream = fs.createReadStream(readFile);
  const writeStream = fs.createWriteStream(writeFile);
  readStream.pipe(writeStream);
};
export { readPipeWrite };

/**
 * Write content to file
 * @param file
 * @param content
 */
const writeToFile = (file: string, content: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    try {
      fs.writeFile(file, content, 'utf8', (err) => {
        if (err) {
          console.error('Something went wrong when writing to file.');
          reject(err);
        }
        resolve('Successfully wrote to file.');
      });
    } catch (err) {
      console.error('Something went wrong when writing to file.');
      reject(err);
    }
  });
};
export { writeToFile };
