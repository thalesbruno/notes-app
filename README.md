# notes-app
A Notes App using Node.js

## Modules covered

### Chalk
>Terminal string styling done right

Install
```bash
npm install chalk
```

Usage
```javascript
const chalk = require('chalk')
console.log(chalk.green('Message'))
```
:page_facing_up: [Read the docs](https://www.npmjs.com/package/chalk)

### File System
>The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

```javascript
const fs = require('fs')
```
:page_facing_up: [Read the docs](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system)

### Nodemon
>nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected

Install
```bash
npm install --save-dev nodemon
```

Usage  
Edit :page_facing_up: package.json
```json
"scripts": {
    "dev": "nodemon"
  },
```
Run
```bash
npm run dev
```

:page_facing_up: [Read the docs](https://www.npmjs.com/package/nodemon)


### Validator
>A library of string validators and sanitizers.

Install
```bash
npm install validator
```

Usage
```javascript
const validator = require('validator')
```
:page_facing_up: [Read the docs](https://www.npmjs.com/package/validator)

