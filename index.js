'use strict'

const pify = require('pify')
const util = require('util')
const async = require('async')

const EXCLUDE_METHODS = [ 'apply', 'memoize', 'log', 'dir', 'noConflict' ]

function remove (arr, element) {
  const index = arr.indexOf(element)
  index !== -1 && arr.splice(index, 1)
}

const methods = Object.keys(async)

EXCLUDE_METHODS.forEach(function (exclude) {
  remove(methods, exclude)
})

const asyncPromise = methods.reduce(function (accumulator, method) {
  accumulator[method] = pify(async[method])
  return accumulator
}, {})

module.exports = methods.reduce(function (accumulator, method) {
  accumulator[method] = (function () {
    const cb = arguments[arguments.length - 1]
    const proxy = util.isFunction(cb) ? async : asyncPromise
    return proxy[method]
  })()
  return accumulator
}, {})
