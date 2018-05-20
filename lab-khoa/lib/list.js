'use strict';

class List {
  constructor(array = []) {
    this.length = array.length;

    for (let i = 0; i < array.length; i++) {
      this[i] = array[i];
    }
  }

  toArray() {
    let array = [];
    for (let i = 0; i < this.length; i++) {
      array[i] = this[i];
    }
    return array;
  }

  push(element) {
    this[this.length++] = element;
    return this.length;
  }

  pop() {
    let deleteMe = this[this.length - 1];
    this.length--;
    if (this.length < 0) return undefined;
    else {
      delete this[this.length];
    }
    return deleteMe;
  }

  forEach(func) {
    if (typeof func !== 'function') return `error, ${func} is not a function`;
    else {
      for (let i = 0; i < this.length; i++) {
        func(this[i]);
      }
      return undefined;
    }
  }

  map(func) {

    let mapArray = new List();

    if (typeof func !== 'function') return `error, ${func} is not a function`;
    else {
      for (let i = 0; i < this.length; i++) {
        mapArray[i] = func(this[i]);
        mapArray.length++;
      }
      return mapArray;
    }
  }

  filter(func) {

    let filterArray = new List();
    let j = 0;
    if (typeof func !== 'function') return `error, ${func} is not a function`;
    else {
      for (let i = 0; i < this.length; i++) {
        if (func(this[i]) === true) {
          filterArray[j] = this[i];
          filterArray.length++;
          j++;
        }
      }
      return filterArray;
    }
  }

  reduce(func, accum) {
    if (typeof func !== 'function') return `error, ${func} is not a function`;
    else {

      if (accum === undefined) {
        accum = this[0];
        
        for (let i = 0; i < this.length - 1; i++) {
          accum = func(accum, this[i + 1]);
        }
        
      } else {
        for (let i = 0; i < this.length; i++) {
          accum = func(accum, this[i]);
        }
      }
    }
    return accum;
  }
}

module.exports = List;