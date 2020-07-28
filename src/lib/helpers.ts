/**
 * A collection of helper functions
 */

import fs from 'fs';
import { IfcArgv } from './type';

/**
 * Return filename from argument values
 * @param argv
 */
const parseFilename = (argv: IfcArgv): string => argv._[1];

/**
 * Return a string of copyright notice
 */
const copyrightNotice = (): string => {
  const thisYear = new Date().getFullYear();
  return `Copyright (c) ${thisYear} Badwater Bay (under MIT license)`;
};

/**
 * Return an array of filenames in a directory
 * @param dir
 */
const listAllFilesInDir = (dir: string, ext: string): string[] => {
  if (!fs.existsSync(dir)) {
    throw new ReferenceError('Directory does not exist.');
  }
  const fileList: string[] = [];
  fs.readdirSync(dir)
    .filter((filename) => filename.indexOf(ext) >= 0)
    .forEach((f) => {
      fileList.push(f.substr(0, f.indexOf(ext)));
    });
  return fileList;
};

/**
 * Loading a file to stream buffer
 * @param answerKeyFile
 */
const loadFileToBuffer = (answerKeyFile: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const stream = fs.createReadStream(answerKeyFile);
    stream
      .on('data', (buffer) => {
        resolve(buffer.toString());
      })
      .on('error', (err) => {
        console.error('Error in loadFileToBuffer.');
        reject(err);
      });
  });

/**
 * Read a file and write to another file
 * @param readFile
 * @param writeFile
 */
const readPipeWrite = (readFile: string, writeFile: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const readStream = fs.createReadStream(readFile).on('error', (err) => {
      console.error('Error in createReadStream.');
      reject(err);
    });
    const writeStream = fs.createWriteStream(writeFile).on('error', (err) => {
      console.error('Error in createWriteStream.');
      reject(err);
    });
    readStream.pipe(writeStream).on('finish', () => {
      resolve('Successfully read a file and wrote a file.');
    });
  });
};

/**
 * Write content to file
 * @param file
 * @param content
 */
const writeToFile = (file: string, content: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    fs.writeFile(file, content, 'utf8', (err) => {
      if (err) {
        console.error('Something went wrong when writing to files (writeToFile).');
        reject(err);
        return;
      }
      resolve('Successfully wrote to a file.');
    });
  });
};

export {
  parseFilename,
  copyrightNotice,
  listAllFilesInDir,
  loadFileToBuffer,
  readPipeWrite,
  writeToFile,
};
