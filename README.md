# promise-async

![Last version](https://img.shields.io/github/tag/Kikobeats/promise-async.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/promise-async/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/promise-async)
[![Dependency status](http://img.shields.io/david/Kikobeats/promise-async.svg?style=flat-square)](https://david-dm.org/Kikobeats/promise-async)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/promise-async.svg?style=flat-square)](https://david-dm.org/Kikobeats/promise-async#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/promise-async.svg?style=flat-square)](https://www.npmjs.org/package/promise-async)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Adds Promises bindings for async library. Works with callbacks as well.

## Install

```bash
npm install promise-async --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install promise-async --save
```

and later link in your HTML:

```html
<script src="bower_components/promise-async/dist/promise-async.js"></script>
```

## Usage

```js
const async = require('promise-async')

async.waterfall([
  function (callback) {
    callback(null, 'one', 'two')
  },
  function (arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three')
  },
  function (arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done')
  }
]).then(function (value) {
  console.log(value === 'done') // => true
})
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
