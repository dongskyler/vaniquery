/**
 * Library of equivalents of jQuery and vanilla JavaScript
 */

module.exports = [
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
    vanilla: 'document.getElementById(' + '$1' + '$2' + '$3' + ')', // eslint-disable-line no-useless-concat
  },
  {
    name: 'parent',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'selectAll',
    jquery: /\$\(('|")(\.)?(\w+[\w_-]*?)('|")\)/g,
    vanilla: 'document.querySelectorAll(' + '$1' + '$2' + '$3' + '$4' + ')', // eslint-disable-line no-useless-concat
  },
];
