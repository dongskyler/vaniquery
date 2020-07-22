/**
 * Library of equivalents of jQuery and vanilla JavaScript
 */

module.exports = [
  {
    name: 'appendElement',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'cloneElement',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'createElement',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'documentReady',
    jquery: /\$\(document\)\.ready\(/g,
    vanilla: "document.addEventListener('DOMContentLoaded', ",
  },
  {
    name: 'getElementById',
    jquery: /\$\(('|")#(\w+[\w_-]*?)('|")\)/g,
    vanilla: 'document.getElementById(' + '$1' + '$2' + '$3' + ')', // eslint-disable-line
  },
  {
    name: 'parent',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'selectAll',
    jquery: /$^/,
    vanilla: '',
  },
];
