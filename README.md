# Angular2 Checkbox Tree

This repository holds the TypeScript source code for an Angular 2 checkbox tree.<br>
The checkbox tree is based on the open source <a href="https://github.com/primefaces/primeng" target="_blank">PrimeNG tree component</a>.<br>
The tree supports partial selection when only some children are selected.<br>
You can use <a href="http://www.primefaces.org/primeng/#/tree" target="_blank">PrimeNG tree attributes</a> to customize the tree look and feel.

## Demo
A working demo can be viewed here: <a href="https://amirch1.github.io/Angular2-Checkbox-Tree/" target="_blank">https://amirch1.github.io/Angular2-Checkbox-Tree/</a>
## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run typings -- install`

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.


##License
The code is distributed under the MIT License (MIT). 

