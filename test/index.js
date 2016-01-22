/* global describe, it */

'use strict'

require('should')
const async = require('..')

describe('promise-async ::', function () {
  it('promise', function () {
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
    ]).should.be.finally.equal('done')
  })

  it('callback', function (done) {
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
    ], function (err, value) {
      value.should.be.equal('done')
      done(err)
    })
  })
})
