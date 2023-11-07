// Queue

/**
 * Features of Queue
 * It is a sequential collection of elements that follows the principle of First In First Out (FIFO)
 * The first element inserted into a queue is the first element to be removed
 * The best analogy for a queue data structure is a queue of people
 * Stack is an abstract data type. It is defined by its behaviour rather than being a mathematical model
 * So, a queue is simply a list that behave like a queue
 * It support two operations:
 * Enqueue to add an element to the end of a collection
 * Dequeue to remove an element from the front of a collection
 */

/**
 * Queue usage
 * Printers
 * Operating System Task Scheduling
 * Callback queue in JavaScript runtime
 */

// Code examples
// enqueue
// dequeue
// isEmpty
// peek
// size
// print

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     return this.items.shift(); // O(n)
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[0];
//     }
//     return null;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items.toString());
//   }
// }

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
