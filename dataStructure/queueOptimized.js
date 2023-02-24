class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item) {
    this.items[this.rear] = item;
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
