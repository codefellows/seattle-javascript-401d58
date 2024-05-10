class Queue {
  constructor() {
    this.storage = [];
    this.back = null;
  }

  enqueue(value) {
    this.storage.push(value);
    this.back = value;
  }

  dequeue() {
    let value = this.storage.shift();
    this.back = this.storage[this.storage.length - 1];
    return value;
  }

  peek() {
    return this.storage[0];
  }

  length() {
    return this.storage.length;
  }
}

module.exports = Queue;
