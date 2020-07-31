# Vaniquery

Homepage: [https://github.com/BadwaterBay/vaniquery](https://github.com/BadwaterBay/vaniquery)

[![npm version](https://badge.fury.io/js/vaniquery.svg)](https://badge.fury.io/js/vaniquery)
![Node.js CI](https://github.com/BadwaterBay/vaniquery/workflows/Node.js%20CI/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/badwaterbay/vaniquery/badge)](https://www.codefactor.io/repository/github/badwaterbay/vaniquery)
[![DeepScan grade](https://deepscan.io/api/teams/9440/projects/13051/branches/212713/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9440&pid=13051&bid=212713)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub issues](https://img.shields.io/github/issues/BadwaterBay/vaniquery.svg)](https://GitHub.com/BadwaterBay/vaniquery/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/BadwaterBay/vaniquery.svg)](https://GitHub.com/BadwaterBay/vaniquery/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/BadwaterBay/vaniquery.svg)](https://GitHub.com/BadwaterBay/vaniquery/pulls/)
[![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/BadwaterBay/vaniquery.svg)](https://GitHub.com/BadwaterBay/vaniquery/pulls/)

---

## Table of contents

- [Thank you, contributors](#thank-you-contributors)
- [Description](#description)
- [Installation and usage](#installation-and-usage)
- [Contributing to this project](#contributing-to-this-project)

---

## Thank you, contributors

We'd like to thank [all of our contributors](https://github.com/BadwaterBay/vaniquery/graphs/contributors).

---

## Description

This command line interface (CLI) app helps you convert jQuery to vanilla JavaScript.

Once upon a time, jQuery offers great convenience to JavaScript developers. However, now vanilla JavaScript has been improved and standardized across all modern browsers. More often than you think, you don't always need jQuery. Removing jQuery dependency means your web app can be loaded faster. It also makes it easier when you migrate your existing web app to more modern libraries or frameworks, such as React.

This app helps you convert jQuery syntax to vanilla JavaScript ones.

---

## Installation and usage

To install the CLI app on your machine, use commands `npm i -g vaniquery` or `yarn global add vaniquery`.

Available commands:

- `vaniquery vanilla path/to/file`: Convert jQuery to vanilla JavaScript in a file.
- `vaniquery revert path/to/file`: Revert vanillaization in a file given its corresponding cache file.

Options:

- `--help`: Show help.
- `--version`: Show version number.
- `-c, --cache`: Cache the original file (_Default_).
- `-C, --no-cache`: Do not cache the original file (_Not recommended_).
- `-v, --verbose`: Show the code being worked on.

---

## Available conversions from jQuery to vanilla JavaScript

- `.addClass()`
- `.append()`
- `.attr()`
- `.children()`
- `$('.class')`
- `.click()`
- `.closest()`
- `$('[data-foo="val"]')` (select by attribute)
- `$('div')`
- `$(document).ready()...`
- `.each()`
- `$(function ()...` (shorthand for `$(document).ready()`)
- `.find()`
- `.hasClass()`
- `$('#id')` (select by ID)
- `.keyup()`
- `.mouseenter()`
- `.parent()`
- `.prop('checked')`
- `.removeAttr()`
- `.removeClass()`
- `.text()`
- `$(this)`
- `.toggleClass()`
- `.val()` (get the value)

---

## Contributing to this project

Please refer to our [Contributing Guidelines](https://github.com/BadwaterBay/vaniquery/blob/master/CONTRIBUTING.md).
