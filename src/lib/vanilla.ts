/**
 * Vanillaize a file
 */

import fs from 'fs';
import equivalentsLib from './equivalentsLib';
import { parseFilename, saveCacheFile } from './helpers';
import { IfcArgv, IfcEquivalentsLibEntry } from './type';

/**
 * Vanillaize a file
 */
const vanilla = (argv: IfcArgv): Promise<string | boolean> | boolean => {
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

    const result = new Promise<string | boolean>((resolve, reject) => {
      try {
        const stream = fs.createReadStream(file);
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
 */
const vanillaOut = (argv: IfcArgv, result: string): boolean => {
  try {
    const file = parseFilename(argv);
    fs.writeFile(file, result, 'utf8', (err): boolean => {
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

export { vanilla, vanillaOut };
