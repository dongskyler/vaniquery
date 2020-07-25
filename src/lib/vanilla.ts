/**
 * Vanillaize a file
 */

import fs from 'fs';
import equivalentsLib from './equivalentsLib';
import { parseFilename, readPipeWrite, writeToFile } from './helpers';
import { IfcArgv, IfcEquivalentsLibEntry } from './type';

/**
 * Save cache file
 * @param argv
 */
const saveCacheFile = (argv: IfcArgv): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const file = parseFilename(argv);
    if (!fs.existsSync(file)) {
      reject(new Error('File does not exist. Aborting.'));
      return;
    }

    if (!(!('cache' in argv) && 'noCache' in argv && argv.noCache === true)) {
      const cacheFile = `${file}.vaniquerycache`;
      readPipeWrite(file, cacheFile)
        .then(() => {
          resolve('Cache file successfully saved.');
        })
        .catch((err) => {
          console.error(err);
          reject(new Error('Cannot write cache file. Aborting.'));
        });
    } else {
      resolve('User chose not to cache the original file. Proceed to vanillaization.');
    }
  });
};

/**
 * Vanillaize a file
 * @param argv
 */
const vanillaize = (argv: IfcArgv): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    try {
      const stream = fs.createReadStream(parseFilename(argv));
      stream.on('data', (buffer: string) => {
        let content: string = buffer;
        equivalentsLib.forEach((eq: IfcEquivalentsLibEntry) => {
          if ('verbose' in argv && argv.verbose === true) {
            console.log(`Vanillaizing ${eq.name}...`);
          }
          content = content.toString().replace(eq.jquery, eq.vanilla);
        });
        resolve(content);
      });
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * Driver function of 'vanilla' command
 * @param argv
 */
const vanilla = async (argv: IfcArgv): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const file = parseFilename(argv);
    console.log(`Vanillaizing '${file}'...`);
    saveCacheFile(argv)
      .then((msgCache) => {
        console.log(msgCache);
        vanillaize(argv).then((vanillaizedCode) => {
          writeToFile(file, vanillaizedCode)
            .then((msgWrite) => {
              console.log(msgWrite);
              resolve(msgWrite);
            })
            .catch((err) => {
              console.error(err);
              reject(err);
            });
        });
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export { vanilla, vanillaize };
