const aFunction = require('./requires-and-exports-a-function')

module.exports = function () {
  return 'loaded ' + aFunction()
}
