class Stack {
  constructor() {
    // this.storage = new LinkedList();
    this.storage = [];
    this.top = null;
  }

  // Add an element to the end of the stack
  push(value) {
    this.storage.push(value);
    this.top = value;
  }

  // Removes the "top" element from the stack and returns it
  pop() {
    let value = this.storage.pop();
    this.top = this.storage[this.storage.length - 1];
    return value;
  }

  // Reads the "top" element from the stack without removing it
  peek() {
    return this.top;
  }

  // Returns the number of elements in the stack
  length() {
    return this.storage.length;
  }
}

module.exports = Stack;
