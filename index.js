var fs = require('fs');
var path = require('path');
var uniqueRandomArray = require('unique-random-array');


var randomQuote = null;


function devquote() {
    if (!randomQuote) {
        var quotesPath = path.join(__dirname, 'quotes.json');
        var quotes = JSON.parse(fs.readFileSync(quotesPath, 'utf8'));
        randomQuote = uniqueRandomArray(quotes);
    }
    return randomQuote();
}


module.exports = devquote;
