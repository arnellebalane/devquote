var ava = require('ava');
var devquote = require('./');


ava('returns a string', function implementation(test) {
    var quote = devquote();
    test.true(typeof quote === 'string');
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
