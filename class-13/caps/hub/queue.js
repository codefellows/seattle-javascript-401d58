'use strict';

class Queue {

  constructor() {
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    return this.storage.shift();
  }

  peek() {
    return this.storage[0];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  length() {
    return this.storage.length;
  }

}

module.exports = Queue;
