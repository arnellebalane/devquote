#!/usr/bin/env node
var meow = require('meow');
var chalk = require('chalk');
var devquote = require('./');


meow([
    'Usage:',
    '  $ devquote'
]);


var quote = devquote();
var text = chalk.bold.magenta(quote.text);
var author = chalk.dim('-- ' + quote.author);

console.log('\n  ' + text + ' ' + author + '\n');
