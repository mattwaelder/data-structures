class Stack {

  constructor() {
    this.storage = {};
    this.currLen = 0;
  }

  push(val) {
    this.storage[this.currLen] = val;
    this.currLen++;
  }

  pop() {
    let removed = this.storage[this.currLen - 1];

    delete this.storage[this.currLen - 1];

    this.currLen <= 1 ? this.currLen = 0 : this.currLen--;

    return removed;
  }

  size() {
    return this.currLen;
  }

}