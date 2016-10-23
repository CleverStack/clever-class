'use strict';

exports.__esModule = true;
exports.StaticEmitter = StaticEmitter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _curryJs = require('./curry.js');

var _curryJs2 = _interopRequireDefault(_curryJs);

var _events = require('events');

var _underscore = require('underscore');

function StaticEmitter() {
  return function (WrappedClass) {
    _underscore.extend(WrappedClass, Object.create(_events.EventEmitter.prototype));
    _events.EventEmitter.call(WrappedClass);
  };
}

var Class = (function (_EventEmitter) {
  _inherits(Class, _EventEmitter);

  function Class() {
    _classCallCheck(this, _Class);

    _EventEmitter.apply(this, arguments);
  }

  Class.proxy = function proxy() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _curryJs2.default.apply(this, args);
  };

  Class.prototype.proxy = function proxy() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _curryJs2.default.apply(this, args);
  };

  var _Class = Class;
  Class = StaticEmitter()(Class) || Class;
  return Class;
})(_events.EventEmitter);

exports.Class = Class;
exports.default = Class;
