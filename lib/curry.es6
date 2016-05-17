import underscore from 'underscore';
import dottie from 'dottie';

module.exports = function curry(func, ...first) {
  if (typeof func === "string" && underscore.isFunction(dottie.get(this, func))) {
    func = dottie.get(this, func);
  }
  return (...second) => {
    return func.apply(this, [].concat(...first, ...second));
  };
};
