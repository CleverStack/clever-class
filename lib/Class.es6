import util             from 'util';
import curry            from './curry.js';
import { EventEmitter } from 'events';
import { extend }       from 'underscore';

export function StaticEmitter() {
  return (WrappedClass) => {
    extend(WrappedClass, Object.create(EventEmitter.prototype))
    EventEmitter.call(WrappedClass)
  }
}

@StaticEmitter()
export class Class extends EventEmitter {
  static proxy(...args) {
    return curry.apply(this, args)
  }
  proxy(...args) {
    return curry.apply(this, args)
  }
}

export default Class;
