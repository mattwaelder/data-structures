class Queue {

  constructor() {
    this.storage = {};
    this.currLen = 0;
  }

  enqueue (val) {
    this.storage[this.currLen] = val;
    this.currLen++;
  }

  dequeue () {
    let removed = this.storage[0];
    delete this.storage[0];
    this.currLen <= 1 ? this.currLen = 0 : this.currLen--;
    for (let [key, value] of Object.entries(this.storage)) {
      this.storage[key - 1] = value;
    }
    return removed;
  }

  size () {
    return this.currLen;
  }

}
