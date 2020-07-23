#!/usr/bin/env node

import revert from '../lib/revert';
import { vanilla, vanillaOut } from '../lib/vanilla';
import { copyrightNotice } from '../lib/helpers';
import { IfcArgv } from '../lib/type';

require('yargs') // eslint-disable-line
  .usage('Usage: vaniquery [OPTIONS] COMMAND')
  .option('c', {
    alias: 'cache',
    describe: 'Cache the original file (default)',
    type: 'boolean',
  })
  .option('C', {
    alias: 'no-cache',
    describe: 'Do not cache the original file (not recommended)',
    type: 'boolean',
  })
  .option('v', {
    alias: 'verbose',
    describe: 'Show the code being worked on',
    type: 'boolean',
  })
  .command({
    command: 'vanilla',
    desc: 'Convert jQuery selectors to vanilla JavaScript ones in a file',
    handler: async (argv: IfcArgv) => {
      const result: string | boolean = await vanilla(argv);
      if (typeof result === 'string') {
        vanillaOut(argv, result);
      } else {
        console.log('Something went wrong during vanillaization.');
      }
    },
  })
  .nargs('vanilla', 1)
  .command({
    command: 'revert',
    desc: 'Revert vanillaization in a file given its corresponding cache file',
    handler: (argv: IfcArgv) => {
      revert(argv);
    },
  })
  .nargs('revert', 1)
  .epilog(copyrightNotice)
  .demandCommand(1).argv;
