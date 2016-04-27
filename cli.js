#!/usr/bin/env node
var meow = require('meow');
var devquote = require('./');


meow([
    'Usage:',
    '  $ devquote'
]);


var quote = devquote();
console.log('\n  ' + quote.text + ' -- ' + quote.author + '\n');
