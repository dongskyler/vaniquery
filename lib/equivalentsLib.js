/**
 * Library of equivalents of jQuery and vanilla JavaScript
 */

module.exports = [
  {
    name: "'$(document).ready'",
    jquery: /\$\(document\)\.ready\(/g,
    vanilla: "document.addEventListener('DOMContentLoaded', ",
  },
];
