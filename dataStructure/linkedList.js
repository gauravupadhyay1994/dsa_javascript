class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  //O(1)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || this.getSize() < index) {
      return;
    }
    if (index === 0 || this.getSize() === index) {
      this.append(value);
      return;
    }

    let pos = 0;
    let curr = this.head;
    while (pos != index) {
      curr = curr.next;
      pos++;
    }
    const node = new Node(value);
    const next = curr.next;
    curr.next = node;
    node.next = next;
    this.size++;
    if (this.getSize() - 1 === index) {
      this.tail = node;
    }
  }
  removeFrom(index) {
    if (index < 0 || this.getSize() < index) {
      return;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    }
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    removedNode = prev.next;
    prev.next = removedNode.next;
    if (index === this.getSize() - 1) {
      this.tail = prev;
    }
    this.size--;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let index = 0;
    let curr = this.head;
    while (curr && curr.value != value) {
      index++;
      curr = curr.next;
    }
    if (this.getSize() === index) {
      return -1;
    }
    return index;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return;
    }
    if (this.head.value === value) {
      value = this.head.value;
      this.head = this.head.next;
      if (this.getSize() === 1) {
        this.tail = null;
      }
      this.size--;
      return value;
    }
    let curr = this.head;
    let prev = null;
    let size = 1;
    while (curr && curr.value != value) {
      size++;
      prev = curr;
      curr = curr.next;
    }
    if (!prev) {
      return;
    }

    if (this.getSize() === size) {
      console.log("Size: ", size, " getSize ", this.getSize());

      this.tail = prev;
      prev.next = null;
      this.size--;
      return;
    }
    prev.next = curr.next;
    this.size--;
  }
  print() {
    if (this.isEmpty()) {
      console.log("this list is empty");
    } else {
      let curr = this.head;
      let listvalues = "";
      while (curr) {
        listvalues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listvalues);
    }
  }
  reverse() {
    if (this.isEmpty()) {
      return;
    }
    this.tail = this.head;
    let prev = null;
    let next = this.head.next;
    let curr = this.head;
    while (curr) {
      curr.next = prev;
      prev = curr;
      this.head = curr;
      curr = next;
      if (curr) next = next.next;
    }
  }
}

const list = new LinkedList();

console.log("Is list empty? ", list.isEmpty());
console.log("Size of the list ", list.getSize());
list.prepend(10);
list.append(20);
list.insert(2, 2);
list.prepend(30);
list.prepend(40);
list.append(50);
list.insert(2, 10);
list.insert(33, 6);

console.log("Is list empty? ", list.isEmpty());
console.log("Size of the list ", list.getSize());
list.print();

list.removeFrom(3);
list.print();
list.removeFrom(5);
list.print();
list.removeValue(40);
list.print();
console.log(list.search(100));
list.reverse();
list.print();
