# Contributing to Vaniquery

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

---

## Table of contents

- [Thank you, contributors](#thank-you-contributors)
- [How can I contribute?](#how-can-I-contribute)
  - [Reporting bugs](#reporting-bugs)
  - [Suggesting features and enhancements](#suggesting-features-and-enhancements)
  - [Submitting pull requests](#submitting-pull-requests)
- [How do I get started?](#how-do-I-get-started)
  - [Initial setup](#initial-setup)
  - [Tips for development](#tips-for-development)
  - [Workflow](#workflow)
  - [Bring your fork up to date with the original repository](#bring-your-fork-up-to-date-with-the-original-repository)
  - [Other useful commands](#other-useful-commands)
- [Style guides](#style-guides)
  - [Git commit messages](#git-commit-messages)
- [Other recommended practices](#other-recommended-practices)
  - [Sign commits with signature verifications](#sign-commits-with-signature-verifications)

---

## Thank you, contributors

We'd like to thank [all of our contributors](https://github.com/BadwaterBay/vaniquery/graphs/contributors).

---

## How can I contribute?

### Reporting bugs

In the bug report, please follow these steps:

- Use a clear and descriptive title for the issue to identify the problem.
- Describe the exact steps which reproduce the bug.
- Describe the behavior you **_observed_** and point out what exactly is the problem with that behavior.
- Explain the behavior you **_expected_** to see instead and why.
- Include screenshots, animated GIFs or videos to demonstrate the bug.
- Describe the environment in which the bug is observed, including the operating system and the browser you are using (if applicable).

### Suggesting features and enhancements

In the feature or enhancement request, please follow these steps:

- Use a clear and descriptive title for the issue to identify the suggestion.
- Describe the current behavior and explain which behavior you expected to see instead and why.
- Explain why this enhancement would be useful.
- It's encouraged to use screenshots or drawings to demonstrate your point, if it helps.

### Submitting pull requests

Please follow these steps:

- Complete the [initial setup](#Initial-setup)
- Follow the [workflow](#Workflow)
- Follow the [style guides](#Style-guides)

---

## How do I get started?

### Initial setup

- Prerequisites: having [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [Node.js 12.x](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/) installed on your machine.
- Fork the repository. ([How to fork a repository?](https://help.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository))
- Clone the forked repository. ([How to clone a repository?](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository))
- In the terminal, change directory to the repository's root directory.
- Add the original repository as a remote called `upstream`:
  - To add the original repository as `upstream`, run command:
    ```
    git remote add upstream https://github.com/BadwaterBay/vanillaize-jquery.git
    ```
  - To verify you have added the original repository, run command:
    ```
    git remote -v
    ```
  - You should see the following output (assuming you are using HTTPS):\
    ```
    origin  https://github.com:<yourGitHubUsername>/vanillaize-jquery.git (fetch)
    origin  https://github.com:<yourGitHubUsername>/vanillaize-jquery.git (push)
    upstream  https://github.com/BadwaterBay/vanillaize-jquery.git (fetch)
    upstream  https://github.com/BadwaterBay/vanillaize-jquery.git (push)
    ```
- Install all dependencies with the following command. This could take a while.
  ```
  yarn --frozen-lockfile
  ```
- Add this command-line app (vaniquery is a command-line app) to your machine for development and testing:
  ```
  yarn dev-i
  ```
- Run command `vaniquery --version` in your terminal. If you see a version number, that means the app has been installed correctly.
- Run command `yarn start:dev` to produce a production build (in `./build/`) and automatically recompiles when you make changes in `./src/` directory.
- Run command `yarn test` to run preset tests on `./build/`.

---

## Tips for development

When you develop the program, 2 commands will be handy, for example:

`vaniquery vanilla ./__tests__/testCases/testCaseFile.js`

and

`vaniquery revert ./__tests__/testCases/testCaseFile.js`

The former will vanillaize the script `./__tests__/testCases/getElementById.js` and update it. Then you can open the file and check the results.

The latter will revert the vanillaized script back to its original form.

Please revert all test case scripts to their original state before submitting a pull request.

---

## Workflow

Our workflow is:

- Find an [issue](https://github.com/BadwaterBay/vanillaize-jquery/issues) you'd like to solve and claim it by leaving a comment.
- Complete the [initial setup](#Initial-setup), if you haven't.
- [Bring your fork up to date with the original repository](#Bring-your-fork-up-to-date-with-the-original-repository).
- Modify the code to solve the issue and commit changes.
- Make sure your base is up to date with the original repository (`upstream`) with commands:
  ```
  git fetch upstream
  git rebase upstream/master
  ```
- Push your commit to the remote of your forked repository. ([How to push commits to remote?](https://help.github.com/en/github/using-git/pushing-commits-to-a-remote-repository))
- Submit a pull request (PR) to be merged into the original repository's `master` branch. ([How to create a PR?](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request))
- Peers will review your PR and may request revisions.
- Once your PR is approved, your commit will be merged to the `master` branch. Congratulations!

If you are new to this workflow, you can a practice run here: [https://github.com/firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions)

If you are stuck, you are welcome to reach out and leave a comment.

---

## Bring your fork up to date with the original repository

- Completed the [initial setup](#Initial-setup), if you haven't.
- Fetch updates from the original repository (`upstream`):
  ```
  git fetch upstream
  ```
- Make sure you are on your local `master` branch:
  ```
  git checkout master
  ```
- Rebase your local `master` branch with `upstream/master` branch:
  ```
  git rebase upstream/master
  ```
- Push your local `master` to remote:
  ```
  git push origin master
  ```
  If your push is rejected ([why?](https://www.reddit.com/r/git/comments/6jzogp/why_am_i_force_pushing_after_a_rebase/)), you might need to force-push to remote:
  ```
  git push -f origin master
  ```

---

## Other useful commands

- Format your code using Prettier:
  - `yarn format` will format files with Prettier and save changes.
  - Tip: when you git-commit, `yarn format` will be automatically triggered.
- Lint your code using Eslint:
  - `yarn lint` will run Eslint to check the code quality. Please try to resolve these issues before committing any changes.
  - Tip: when you git-commit, `yarn lint` will be automatically triggered.
- `yarn build`: Create a production build inside `./build/`.
- `yarn dev-i`: Install this command line interface (CLI) app on your machine via NPM for development and testing.
- `yarn dev-r`: Remove this CLI app on your machine.
- `yarn test`: Run preset tests on production build in `./build/`, meaning that you need to run `yarn build` or `yarn start` before `yarn test`.
- `yarn start`: A combination of `yarn build`, `yarn dev-r` and `yarn dev-i`.
- `yarn start:dev`: A combination of `yarn build`, `yarn dev-r` and `yarn dev-i`, but will watch changes in `./src` and repeat the combination.
- If you run into problems with Node dependencies:
  - Try `yarn --frozen-lockfile` to see if it solves your problems.
  - If not, run `yarn refresh` to remove all dependencies in the `node_modules` directory and do a clean install of all dependencies.

---

## Style guides

### Git commit messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Use '&' instead of spelling out 'and'
- Limit the first line to 70 characters or less.
- Reference issues and pull requests liberally after the first line.
- When only changing documentation, include `[ci skip]` in the commit title.
- Consider starting the commit message with an applicable emoji:
  - :star: `:star:` when adding new features or enhancements
  - :bug: `:bug:` when fixing bugs
  - :art: `:art:` when improving the UI
  - :memo: `:memo:` when writing documentations
  - :shirt: `:shirt:` when fixing linter warnings or improving the format of the code
  - :bath: `:bath:` when fixing CI builds
  - :racehorse: `:racehorse:` when improving the performance
  - :white_check_mark: `:white_check_mark:` when adding tests
  - :lock: `:lock:` when dealing with security
  - :arrow_up: `:arrow_up:` when upgrading dependencies
  - :arrow_down: `:arrow_down:` when downgrading dependencies
  - :wrench: `:wrench:` when configuring infrastructures

---

## Other recommended practices

### Sign commits with signature verifications

It is encouraged to sign your commits with signature verifications with GPG keys. [How?](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)
