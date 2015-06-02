import util           from 'util';
import curry          from './curry.es6';
import {EventEmitter} from 'events';
import underscore     from 'underscore';

function StaticEmitter(Klass) {
  underscore.extend(Klass, EventEmitter.prototype);
  EventEmitter.call(Klass);
}

// @StaticEmitter
class Class extends EventEmitter {
  static proxy = curry;
  constructor() {
    super();
  }
}

Class.prototype.proxy = curry;

module.exports = Class;
