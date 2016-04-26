var fs = require('fs');
var path = require('path');
var uniqueRandomArray = require('unique-random-array');


function devquote() {
    var quotesPath = path.join(__dirname, 'quotes.json');
    var quotes = JSON.parse(fs.readFileSync(quotesPath, 'utf8'));
    return uniqueRandomArray(quotes);
}


module.exports = devquote;
