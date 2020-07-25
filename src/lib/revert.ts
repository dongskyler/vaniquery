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
    console.log('Reverting vanillaization...');

    const file = parseFilename(argv);
    const cacheFile = `${file}.vaniquerycache`;

    if (fs.existsSync(cacheFile)) {
      readPipeWrite(cacheFile, file)
        .then(() => {
          fs.unlink(cacheFile, (err) => {
            if (err) {
              console.error(err);
              reject(err);
              return;
            }
            const msg = 'Reverting vanillaization finished.';
            console.log(msg);
            resolve(msg);
          });
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    } else {
      const msg = 'No cache file found. Cannot revert vanillaization.';
      console.log(msg);
      reject(msg);
    }
  });
};

export default revert;
