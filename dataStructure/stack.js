// last in first out
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

// console.log(stack.isEmpty());
stack.push(20);
stack.push(30);
stack.push(10);

console.log(stack.size());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
