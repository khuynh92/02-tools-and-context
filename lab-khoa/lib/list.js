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
    let deleteMe = this[this.length-1];
    this.length--;
    if (this.length < 0) return undefined;
    else {
      delete this[this.length];
    }
    return deleteMe;
  }
  
  forEach(func) {
    if(typeof func !== 'function') return `error, ${func} is not a function`;
    else {
      for(let i = 0; i < this.length; i++) {
        func(this[i]);
      }
      return undefined;
    }
  }
  
  map(func) {
    if(typeof func !== 'function') return `error, ${func} is not a function`;
    else {
      for(let i = 0; i < this.length; i++) {
        this[i] = func(this[i]);
      }
      console.log(this);
      return this;
    }
  }
}

module.exports = List;