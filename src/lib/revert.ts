/**
 * Revert changes of vanillaizing a file, if its cached file is present
 */

import fs from 'fs';
import { parseFilename, readPipeWrite } from './helpers';
import { IfcArgv } from './type';

/**
 * @param {IfcArgv} argv
 */
const revert = (argv: IfcArgv): boolean => {
  try {
    console.log('Reverting vanillaization...');

    const file = parseFilename(argv);
    const cacheFile = `${file}.vaniquerycache`;

    if (fs.existsSync(cacheFile)) {
      const revertFile = new Promise((resolve, reject) => {
        try {
          readPipeWrite(cacheFile, file);
          resolve();
        } catch (err) {
          console.error(err);
          reject();
        }
      });

      revertFile
        .then(() => {
          fs.unlinkSync(cacheFile);
          console.log('Reverting vanillaization finished.');
          return true;
        })
        .catch((err) => {
          console.error('Something went wrong during reverting vanillaization.');
          console.error(err);
          return false;
        });
    } else {
      console.log('No cache file found. Cannot revert vanillaization.');
      return false;
    }
  } catch (err) {
    console.error('Something went wrong during reverting vanillaization.');
    console.error(err);
    return false;
  }
  return false;
};

export default revert;
