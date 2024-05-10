const Queue = require("./queue");
const Stack = require("./stack");

let stack = new Stack();

stack.push("John");
stack.push("Jack");
stack.push("Camila");
stack.push("Kelly");

console.log(stack);
console.log(stack.peek());
console.log(stack.length());
console.log(stack);

console.log("--------------------------");

// Process the whole stack ...
while (stack.length()) {
  // Print the top of the stack and remove it
  console.log(stack.pop());
}

// this shoild be an empty stack
console.log(stack);

console.log("--------------------------");

let queue = new Queue();
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.enqueue("Kelly");

console.log(queue);

while (queue.peek()) {
  console.log(queue.dequeue());
}

console.log(queue);
