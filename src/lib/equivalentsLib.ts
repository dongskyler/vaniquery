/**
 * Library of equivalents of jQuery and vanilla JavaScript
 */

const equivalentsLib = [
  {
    name: 'click',
    jquery: /(\$\(('|").*?('|")\))\.click\(\s*(function\s*\(.*\)\s*|\(.*\)\s*=>\s*)\{/g,
    vanilla: '$1' + '.addEventListener(' + '$2' + 'click' + '$3' + ', ' + '$4' + '{', // eslint-disable-line no-useless-concat
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
    name: 'keyup',
    jquery: /(\$\(('|").*?('|")\))\.keyup\(\s*(function\s*\(.*\)\s*|\(.*\)\s*=>\s*)\{/g,
    vanilla: '$1' + '.addEventListener(' + '$2' + 'keyup' + '$3' + ', ' + '$4' + '{', // eslint-disable-line no-useless-concat
  },
  {
    name: 'parent',
    jquery: /$^/,
    vanilla: ').parentNode',
  },
  {
    name: 'children',
    jquery: /\)\.children\(\)/g,
    vanilla: ').children',
  },
  {
    name: 'selectAll',
    jquery: /\$\(('|")(\.)?(\w+[\w_-]*)('|")\)/g,
    vanilla: 'document.querySelectorAll(' + '$1' + '$2' + '$3' + '$4' + ')', // eslint-disable-line no-useless-concat
  },
  {
    name: 'selectAllAttribute',
    jquery: /\$\(('|")(\[\w+[\S]*\])('|")\)/g,
    vanilla: 'document.querySelectorAll(' + '$1' + '$2' + '$3' + ')', // eslint-disable-line no-useless-concat
  },
  {
    name: 'getElementById',
    jquery: /\$\(('|")#(\w+[\w_-]*?)('|")\)/g,
    vanilla: 'document.getElementById(' + '$1' + '$2' + '$3' + ')', // eslint-disable-line no-useless-concat
  },
];

export default equivalentsLib;
