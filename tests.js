var ava = require('ava');
var devquote = require('./');


ava('should return an object', function implementation(test) {
    var quote = devquote();
    test.true(typeof quote === 'object');
    test.false(quote instanceof Array);
    test.truthy(quote);
});


ava('should return an object with the quote text and author',
function implementation(test) {
    var quote = devquote();
    test.true(quote.hasOwnProperty('text'));
    test.true(quote.hasOwnProperty('author'));
});


ava('should not repeat consecutively', function implementation(test) {
    var previous = null;
    var loopUntil = 100;
    for (var iterator = 0; iterator < loopUntil; iterator++) {
        var quote = devquote();
        test.not(quote, previous);
        previous = quote;
    }
});
