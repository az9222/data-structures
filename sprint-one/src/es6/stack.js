class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    var returnValue = this.storage[this.count];
    delete this.storage[this.count];
    return returnValue;
  }

  size() {
    return this.count;
  }
}