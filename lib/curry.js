'use strict';

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _dottie = require('dottie');

var _dottie2 = _interopRequireDefault(_dottie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function curry(func) {
  var _this = this;

  for (var _len = arguments.length, first = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    first[_key - 1] = arguments[_key];
  }

  if (typeof func === "string" && _underscore2.default.isFunction(_dottie2.default.get(this, func))) {
    func = _dottie2.default.get(this, func);
  }
  return function () {
    var _ref;

    for (var _len2 = arguments.length, second = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      second[_key2] = arguments[_key2];
    }

    return func.apply(_this, (_ref = []).concat.apply(_ref, first.concat(second)));
  };
};
