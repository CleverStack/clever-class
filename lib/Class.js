'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _curryJs = require('./curry.js');

var _curryJs2 = _interopRequireDefault(_curryJs);

var _events = require('events');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function StaticEmitter(Klass) {
  _underscore2.default.extend(Klass, _events.EventEmitter.prototype);
  _events.EventEmitter.call(Klass);
}

// @StaticEmitter

var Class = (function (_EventEmitter) {
  _inherits(Class, _EventEmitter);

  _createClass(Class, null, [{
    key: 'proxy',
    value: _curryJs2.default,
    enumerable: true
  }]);

  function Class() {
    _classCallCheck(this, Class);

    _EventEmitter.call(this);
  }

  return Class;
})(_events.EventEmitter);

Class.prototype.proxy = _curryJs2.default;

module.exports = Class;
