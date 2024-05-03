'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // this.previous;
  }
}

// singly -> nodes point in 1 direction
// doubly -> node point in 2 direction
class LinkedList {
  constructor() {
    this.head = null;
  }
}

let list = new LinkedList();
list.head = new Node('fire');
list.head.next = new Node('umbrella');
list.head.next.next = new Node('water');
list.head.next.next.next = new Node('navigation');
list.head.next.next.next.next = new Node('De-salvinizer');
list.head.next.next.next.next.next = new Node('Potatoes');
list.head.next.next.next.next.next.next = new Node('fishing line with hook');
list.head.next.next.next.next.next.next.next = new Node('groceries');
list.head.next.next.next.next.next.next.next.next = new Node('phone');
list.head.next.next.next.next.next.next.next.next.next = new Node('sail');

// console.log(JSON.stringify(list));

// Big O
// time = O(n)
// space = 0(1)
function traverse(list) { // n = number of things in our list.
  let current = list.head;

  while(current !== null) {
    console.log(current.value);
    current = current.next; // pulling the rope in by 1 knot.
  };
}

// Big O
// time = O(1)
// space = O(1)
function addToFront(value, list) { // n = number of things in our list + value
  let newHead = new Node(value);
  newHead.next = list.head;
  list.head = newHead;
}

function addToBack(value, list) {
  let current = list.head;

  // stop the loop before we reach null (AKA current is the tail)
  while(current.next !== null) {
    current = current.next;
  }

  let newTail = new Node(value);
  current.next = newTail;
}

addToFront('motor', list);
addToFront('medkit', list);
addToBack('anchor', list);
traverse(list);
