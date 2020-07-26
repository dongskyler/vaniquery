# Vaniquery

Homepage: [https://github.com/BadwaterBay/vaniquery](https://github.com/BadwaterBay/vaniquery)

---

## Table of contents

- [Description](#Description)
- [Badges](#Badges)
- [Installation and usage](#Installation-and-usage)
- [Contributing to this project](#Contributing-to-this-project)
- [Contributors](#Contributors)

---

## Description

This command line interface (CLI) app helps you convert jQuery to vanilla JavaScript.

Once upon a time (since 2006), jQuery offers great convenience to JavaScript developers. However, 14 years later, vanilla JavaScript can do much more. More often than you think, you don't always need jQuery. Removing jQuery dependency means your web app can run faster and be loaded faster. It also makes it easier when you migrate your existing web app to more modern libraries or frameworks, such as React/Redux.

---

## Badges

[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Node.js CI](https://github.com/BadwaterBay/vaniquery/workflows/Node.js%20CI/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/badwaterbay/vaniquery/badge)](https://www.codefactor.io/repository/github/badwaterbay/vaniquery)
[![DeepScan grade](https://deepscan.io/api/teams/9440/projects/13051/branches/212713/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9440&pid=13051&bid=212713)

[![GitHub issues](https://img.shields.io/github/issues/BadwaterBay/vaniquery.svg)](https://GitHub.com/BadwaterBay/vaniquery/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/BadwaterBay/vaniquery.svg)](https://GitHub.com/BadwaterBay/vaniquery/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/BadwaterBay/vaniquery.svg)](https://GitHub.com/BadwaterBay/vaniquery/pulls/)
[![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/BadwaterBay/vaniquery.svg)](https://GitHub.com/BadwaterBay/vaniquery/pulls/)

---

## Installation and usage

The CLI app is currently in prerelease stage.

To install the CLI app on your machine, use commands:

```
npm i -g vaniquery
```

or

```
yarn global add vaniquery
```

To install the app for development and testing, please refer to [our contributing guidelines](https://github.com/BadwaterBay/vaniquery/blob/master/CONTRIBUTING.md#Initial-setup).

Available commands:

- `vaniquery vanilla filename`: Convert jQuery to vanilla JavaScript in a file.
- `vaniquery revert filename`: Revert vanillaization in a file given its corresponding cache file.

Options:

- `--help`: Show help.
- `--version`: Show version number.
- `-c, --cache`: Cache the original file (_Default_).
- `-C, --no-cache`: Do not cache the original file (_Not recommended_).
- `-v, --verbose`: Show the code being worked on.

---

## Available conversions from jQuery to vanilla JavaScript

- add class
- append child
- children
- click
- document ready
- document ready (shorthand)
- find
- for each
- get element by ID
- keyup
- mouse enter
- parent
- remove class
- select all elements
- select all elements by attribute
- text content
- this
- value
- variable names that start with '\$'

---

## Contributing to this project

Please refer to our [Contributing Guidelines](https://github.com/BadwaterBay/vaniquery/blob/master/CONTRIBUTING.md).

---

## Contributors

[Click here to see a list of our contributors.](https://github.com/BadwaterBay/vaniquery/graphs/contributors)
