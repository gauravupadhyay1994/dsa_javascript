// first in first out (FIFO)
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);

console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.size());
queue.print();
queue.dequeue();
queue.print();
queue.enqueue(12);
queue.print();
