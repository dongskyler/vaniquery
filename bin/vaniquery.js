#!/usr/bin/env node

const vanillaScript = require('../lib/vanillaScript');

const thisYear = new Date().getFullYear();
const copyrightNotice = `Copyright (c) ${thisYear} Badwater Bay`;

require('yargs') // eslint-disable-line
  .usage('Usage: vaniquery [OPTIONS] COMMAND')
  // .option('c', {
  //   alias: 'cache',
  //   describe: 'Save changes to cache',
  //   type: 'boolean',
  // })
  // .option('v', {
  //   alias: 'verbose',
  //   describe: 'Show the code being worked on',
  //   type: 'boolean',
  // })
  .command({
    command: 'vanilla',
    desc: 'Convert jQuery selectors to vanilla JavaScript ones in a file',
    handler(argv) {
      vanillaScript(argv._[1]);
    },
  })
  .nargs('vanilla', 1)
  // .command({
  //   command: 'revert',
  //   desc: 'Revert the most recent changes in a file given a cache file',
  //   handler: (argv) => {
  //     console.log(argv);
  //   },
  // })
  // .nargs('revert', 1)
  .epilog(copyrightNotice)
  .demandCommand(1).argv;
