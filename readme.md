devquote
========

Get a random developer quote.


### Install

You can install it locally:

```bash
npm install --save devquote
```

or globally:


```
npm install --g devquote
```


### Usage

```javascript
var devquote = require('devquote');

devquote();
```


### API

#### `devquote()`

Returns a random developer quote (as an object):

```javascript
{
    "text": "...",
    "author": "..."
}
```


### CLI

```bash
devquote
```

Prints a random developer quote in the terminal.


### License

MIT License
