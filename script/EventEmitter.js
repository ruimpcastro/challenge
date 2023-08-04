// code provided by comment on https://gist.github.com/mudge/5830382

/**
 * @class EventEmitter
 * @description State management class that allows for event-driven programming.
 */

export class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * @method on
   * @description Adds a listener to the event queue for a given event.
   * @param {string} event - The event name.
   * @param {function} listener - The callback function.
   * @returns {removeListener} A function that removes the listener from the event queue.
   * @example
   * emitter.on('event', () => console.log('Hello there!'));
   * emitter.emit('event'); // 'Hello there!'
   */

  removeListener(event, listener) {
    if (typeof this.events[event] === "object") {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
    }
  }

  on(event, listener) {
    if (typeof this.events[event] !== "object") {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.removeListener(event, listener);
  }

  /**
   * @method emit
   * @description Emits an event and calls each of the listeners registered for it.
   * @param {string} event - The event name.
   * @param {...*} args - Arguments to be passed to the callback functions.
   * * @example
   * emitter.once('event', () => console.log('One emit to rule them all!'));
   * emitter.emit('event'); // 'One emit to rule them all!'
   * emitter.emit('event'); // Doesn't emit anything.
   */

  emit(event, ...args) {
    if (typeof this.events[event] === "object") {
      this.events[event].forEach((listener) => listener.apply(this, args));
    }
  }

  /**
   * @method once
   * @description Adds a one-time listener to the event queue for a given event.
   * @param {string} event - The event name.
   * @param {function} listener - The callback function.
   * @returns {removeListener} A function that removes the listener from the event queue.
   **/

  once(event, listener) {
    const remove = this.on(event, (...args) => {
      remove();
      listener.apply(this, args);
    });
  }
}
