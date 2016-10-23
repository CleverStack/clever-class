import { get } from 'dottie'
import { isString, isFunction } from 'underscore'

module.exports = function(func, ...first) {
  func = isString(func) && isFunction(get(this, func)) ? get(this, func) : func
  return (...second) => {
    return func.apply(this, [].concat(...first, ...second))
  }
}
