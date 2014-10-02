toStyle
=======

Converts style objects to strings. Can be used on node or in the browser.

## Install

```npm install to-style```

## Usage

```js
var toStyleString = require('to-style').string
var toStyleObject = require('to-style').object
```

### toStyleString

```js
toStyleString({
    border: {
        width: 1,
        color: 'red'
    },
    padding: 4,
    margin: {
        top: 5
    }
}) == 'border-width: 1px; border-color: red; padding: 4px; margin-top: 5px;'
```

### toStyleObject
```js

toStyleObject({
    padding: {
        top: 3,
        bottom: 2
    },
    border: '1px solid red',
    margin: 4
}) // =>
/*
{
    'padding-top': '3px',
    'padding-bottom': '2px',
    'border': '1px solid red',
    'margin': '4px'
}
 */
```

You can also get your styles in camel-case, just pass a config object as a second argument to ```toStyleObject```, with ```camelize: true```

Example:

```js
toStyleObject({
    padding: {
        top: 10
    },
    'border-width': 20
}, { camelize: true})

/**
 *  {
 *      paddingTop: '10px',
 *      borderWidth: '20px'
 *  }
 */
```

## Usage in browser

In browser, make sure you add ```dist/toStyle.js``` to your page. This exposes a global ```toStyle``` variable.

```js
var toStyleString = toStyle.string
var toStyleObject = toStyle.object

```