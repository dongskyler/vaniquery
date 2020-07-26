/**
 * Library of equivalents of jQuery and vanilla JavaScript
 */

const equivalentsLib = [
  {
    name: 'click',
    jquery: /(\$\(('|"|`).*?('|"|`)\))\.click\(/g,
    vanilla: '$1' + '.addEventListener(' + '$2' + 'click' + '$2' + ', ', // eslint-disable-line no-useless-concat
  },
  {
    name: 'keyup',
    jquery: /(\$\(('|"|`).*?('|"|`)\))\.keyup\(/g,
    vanilla: '$1' + '.addEventListener(' + '$2' + 'keyup' + '$2' + ', ', // eslint-disable-line no-useless-concat
  },
  {
    name: 'mouseenter',
    jquery: /(\$\(('|"|`).*?('|"|`)\))\.mouseenter\(/g,
    vanilla: '$1' + '.addEventListener(' + '$2' + 'mouseenter' + '$2' + ', ', // eslint-disable-line no-useless-concat
  },
  {
    name: 'addClass',
    jquery: /\.addClass\(/g,
    vanilla: '.classList.add(',
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
    name: 'documentReadyShorthand',
    jquery: /\$\(\s*function\s*\(\s*\)\s*\{/g,
    vanilla: "document.addEventListener('DOMContentLoaded', () => {",
  },
  {
    name: 'documentReadyShortHand',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'parent',
    jquery: /\.parent\(\)/g,
    vanilla: '.parentNode',
  },
  {
    name: 'children',
    jquery: /\)\.children\(\)/g,
    vanilla: ').children',
  },
  {
    name: 'find',
    jquery: /\.find\(/g,
    vanilla: '.querySelectorAll(',
  },
  {
    name: 'getElementById',
    jquery: /\$\(('|"|`)#(.*)('|"|`)\)/g,
    vanilla: 'document.getElementById(' + '$1' + '$2' + '$3' + ')', // eslint-disable-line no-useless-concat
  },
  {
    name: 'selectAllAttribute',
    jquery: /\$\(('|"|`)(\[.+\])('|"|`)\)/g,
    vanilla: 'document.querySelectorAll(' + '$1' + '$2' + '$3' + ')', // eslint-disable-line no-useless-concat
  },
  {
    name: 'selectAll',
    jquery: /\$\(('|"|`)(\.)?(.+)('|"|`)\)/g,
    vanilla: 'document.querySelectorAll(' + '$1' + '$2' + '$3' + '$4' + ')', // eslint-disable-line no-useless-concat
  },
];

export default equivalentsLib;
