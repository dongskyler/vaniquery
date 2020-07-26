#!/usr/bin/env node

import revert from '../lib/revert';
import { vanilla } from '../lib/vanilla';
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
    desc: 'Convert jQuery to vanilla JavaScript in a file',
    handler: (argv: IfcArgv) => vanilla(argv).catch((err) => console.error(err)),
  })
  .nargs('vanilla', 1)
  .command({
    command: 'revert',
    desc: 'Revert vanillaization in a file if its cache file is present',
    handler: (argv: IfcArgv) => revert(argv).catch((err) => console.error(err)),
  })
  .nargs('revert', 1)
  .epilog(copyrightNotice())
  .demandCommand(1).argv;
