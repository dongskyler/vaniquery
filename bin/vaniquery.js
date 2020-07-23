#!/usr/bin/env node

/**
 * Main script of vaniquery
 */

const { revert } = require('../lib/revert');
const { vanilla, vanillaOut } = require('../lib/vanilla');
const { copyrightNotice } = require('../lib/helpers');

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
    handler: async (argv) => {
      const result = await vanilla(argv);
      vanillaOut(argv, result);
    },
  })
  .nargs('vanilla', 1)
  .command({
    command: 'revert',
    desc: 'Revert vanillaization in a file given its corresponding cache file',
    handler: (argv) => {
      revert(argv);
    },
  })
  .nargs('revert', 1)
  .epilog(copyrightNotice)
  .demandCommand(1).argv;
