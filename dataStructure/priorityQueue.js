class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.queue.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (element.priority < this.queue[i].priority) {
          this.queue.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(element);
      }
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// for enqueing in O(logn) time
function enqueue(element) {
  if (this.isEmpty()) {
    this.queue.push(element);
  } else {
    let left = 0;
    let right = this.queue.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (element.priority < this.queue[mid].priority) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    this.queue.splice(left, 0, element);
  }
}
