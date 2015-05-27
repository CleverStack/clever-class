var underscore = require('underscore')

module.exports = function curry(func, ...first) {
  if (typeof func === "string" && underscore.isFunction(this[func])) {
    func = this[func];
  }
  return (...second) => {
    return func.apply(this, [].concat(...first, ...second));
  };
};