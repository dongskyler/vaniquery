/**
 * Library of equivalents of jQuery and vanilla JavaScript
 *
 * Note: the order of this array matters
 */

const equivalentsLib = [
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
    name: 'addClass',
    jquery: /\.addClass\(/g,
    vanilla: '.classList.add(',
  },
  {
    name: 'removeClass',
    jquery: /\.removeClass\(/g,
    vanilla: '.classList.remove(',
  },
  {
    name: 'hasClass',
    jquery: /\.hasClass\(/g,
    vanilla: '.classList.contains(',
  },
  {
    name: 'this',
    jquery: /\$\(\s*this\s*\)/g,
    vanilla: 'this',
  },
  {
    name: 'setAttribute',
    jquery: /\.attr\(/g,
    vanilla: '.setAttribute(',
  },
  {
    name: 'removeAttribute',
    jquery: /\.removeAttr\(/g,
    vanilla: '.removeAttribute(',
  },
  {
    name: 'valueGet',
    jquery: /\.val\(\s*\)/g,
    vanilla: '.value',
  },
  {
    name: 'valueDefine',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'textContent',
    jquery: /\.text\(/g,
    vanilla: '.textContent(',
  },
  {
    name: 'checkedGet',
    jquery: /\.prop\(\s*(?:'|")checked(?:'|")\s*\)/g,
    vanilla: '.checked',
  },
  {
    name: 'checkedDefine',
    jquery: /\.prop\(\s*(?:'|")checked(?:'|")\s*,\s*(true|false)\s*\)/g,
    vanilla: '.checked = ' + '$1', // eslint-disable-line no-useless-concat
  },
  {
    name: 'parent',
    jquery: /\.parent\(\)/g,
    vanilla: '.parentNode',
  },
  {
    name: 'children',
    jquery: /\.children\(\s*\)/g,
    vanilla: '.children',
  },
  {
    name: 'siblings',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'find',
    jquery: /\.find\(/g,
    vanilla: '.querySelectorAll(',
  },
  {
    name: 'closest',
    jquery: /$^/,
    vanilla: '',
  },
  {
    name: 'appendChild',
    jquery: /\.append\(\s*(\S+)\s*\)/g,
    vanilla: '.appendChild(' + 'document.createElement(' + '$1' + '))', // eslint-disable-line no-useless-concat
  },
  {
    name: 'each',
    jquery: /\.each\(/g,
    vanilla: '.forEach(',
  },
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
    name: 'getElementById',
    jquery: /\$\(('|"|`)#(\S*)('|"|`)\)/g,
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
  {
    name: 'variable',
    jquery: /\$([\S^(]+)\s*?=/g,
    vanilla: '$1 =',
  },
];

export default equivalentsLib;
