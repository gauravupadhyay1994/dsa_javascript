class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
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
  remove(index) {
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

list.remove(3);
list.print();
list.remove(5);
list.print();
