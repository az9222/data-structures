class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.removeCount = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var returnValue = this.storage[this.removeCount];
    delete this.storage[this.removeCount];
    this.removeCount++;
    return returnValue;
  }

  size() {
    if (this.removeCount > this.count) {
      return 0;
    }
    return this.count - this.removeCount;
  }
};
