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
    var quote = randomQuote();
    return quote.text + ' -- ' + quote.author;
}


module.exports = devquote;
