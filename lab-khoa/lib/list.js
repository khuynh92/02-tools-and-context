'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(element) {
    this[this.length++] = element;
    return this.length;
  }

  pop() {
    this.length--;
    if (this.length < 0) return undefined;
    else {
      delete this[this.length];
    }
  } 
}

module.exports = List;