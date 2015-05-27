var EventEmitter = require('events').EventEmitter
  , util         = require('util')
  , curry        = require('./curry.es6')
  , debug        = require('debug')('cleverstack:class');

class Class extends EventEmitter {
  static proxy = curry;
  constructor() {
    super();
  }
}

util.inherits(Class, EventEmitter);
EventEmitter.call(Class);

Class.prototype.proxy = curry;

module.exports        = Class;