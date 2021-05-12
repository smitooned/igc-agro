export class Events {
  _events: any = {};
  constructor(obj) {
    this._events = {};
    return Object.assign(this, obj);
  }
  on(hash, cb) {
    if (typeof hash === 'string') {
      if (!Array.isArray(this._events[hash])) {
        this._events[hash] = [];
      }
      if (this._events[hash].indexOf(cb) === -1) this._events[hash].push(cb);
    } else if (typeof hash === 'object') {
      Object.keys(hash).forEach(key => {
        this.on(key, hash[key]);
      });
    }
  }
  trigger(name, ...args) {
    if (Array.isArray(this._events[name]))
      this._events[name].forEach(fn => {
        if (typeof fn === 'function') fn(...args);
      });
  }
  off(name, cb) {
    if (name && cb) {
      this._events[name] = this._events[name].filter(fn => cb !== fn);
    } else {
      console.error('Specify an event name and listener function to delete');
    }
  }
}

export const GlobalEvents = new Events({});
