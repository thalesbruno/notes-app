# notes-app
A command-line Notes App using Node.js

## Install

In the root directory, to install all dependencies, type:
```bash
npm install
```

## Usage

Create note 
```bash
node app.js add --title "Note title" --body "Note content"
```

Remove note
```bash
node app.js remove --title "Note title"
```

Read note
```bash
node app.js read --title "Note title"
```

List all notes
```bash
node app.js list
```

## Modules covered

### Debugger
>The debugger statement invokes any available debugging functionality, such as setting a breakpoint.

#### Usage
Add the follow statement in somewhere in your code
```javascript
debugger
```

So, you can call node with inspect options like this:
```bash
node inspect app.js
```

And finally, open in google chrome: chrome://inspect and click on the remote target you want.  

:page_facing_up: [Read the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)

### Chalk
>Terminal string styling done right

#### Install
```bash
npm install chalk
```

#### Usage
```javascript
const chalk = require('chalk')
console.log(chalk.green('Message'))
```
:page_facing_up: [Read the docs](https://www.npmjs.com/package/chalk)

### File System
>The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

#### Usage
```javascript
const fs = require('fs')
```
:page_facing_up: [Read the docs](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system)

### Nodemon
>nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected

#### Install
```bash
npm install --save-dev nodemon
```

#### Usage  
Edit ./package.json
```json
"scripts": {
    "dev": "nodemon"
  },
```
#### Run
```bash
npm run dev
```

:page_facing_up: [Read the docs](https://www.npmjs.com/package/nodemon)

### Process.argv
>The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.

:page_facing_up: [Read the docs](https://nodejs.org/dist/latest-v12.x/docs/api/process.html#process_process_argv)

### Validator
>A library of string validators and sanitizers.

#### Install
```bash
npm install validator
```

#### Usage
```javascript
const validator = require('validator')
validator.isEmail('name@example.com') //=> true
```
:page_facing_up: [Read the docs](https://www.npmjs.com/package/validator)

### Yargs
>Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

#### Install
```bash
npm install yargs
```

#### Usage
```javascript
const yargs = require('yargs')
```
:page_facing_up: [Read the docs](https://www.npmjs.com/package/yargs)
