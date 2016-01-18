'use strict'

const pify = require('pify')
const async = require('async')

const EXCLUDE_METHODS = [ 'apply', 'memoize', 'log', 'dir', 'noConflict' ]

function remove (arr, element) {
  const index = arr.indexOf(element)
  index !== -1 && arr.splice(index, 1)
}

let methods = Object.keys(async)

EXCLUDE_METHODS.forEach(function (exclude) {
  remove(methods, exclude)
})

module.exports = methods.reduce(function (accumulator, method) {
  accumulator[method] = pify(async[method])
  return accumulator
}, {})
