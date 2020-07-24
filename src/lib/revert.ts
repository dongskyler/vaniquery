/**
 * Revert changes of vanillaizing a file, if its cached file is present
 */

import fs from 'fs';
import { parseFilename, readPipeWrite } from './helpers';
import { IfcArgv } from './type';

/**
 * @param {IfcArgv} argv
 */
const revert = (argv: IfcArgv): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    try {
      console.log('Reverting vanillaization...');

      const file = parseFilename(argv);
      const cacheFile = `${file}.vaniquerycache`;

      if (fs.existsSync(cacheFile)) {
        readPipeWrite(cacheFile, file);
        fs.unlink(cacheFile, (err) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          const msg = 'Reverting vanillaization finished.';
          console.log(msg);
          resolve(msg);
        });
      } else {
        const msg = 'No cache file found. Cannot revert vanillaization.';
        console.log(msg);
        reject(msg);
      }
    } catch (err) {
      console.error('Something went wrong during reverting vanillaization.');
      console.error(err);
      reject(err);
    }
  });
};

export default revert;
