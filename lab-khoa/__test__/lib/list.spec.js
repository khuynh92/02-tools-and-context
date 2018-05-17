const List = require('../../lib/list');

describe('List Module', () => {
  

  it('push() should return the updated length of the list', () => {

    let newList = new List();
    newList.push('foo');
    newList.push('bar');

    expect(newList.length).toEqual(2);
  });

  it('push() should add the argument to the end of the list', () => {

    let newList = new List();
    newList.push('foo');
    
    expect(newList[newList.length - 1]).toEqual('foo');
  });

  it('pop() should return undefined if the list is empty', () => {

    let newList = new List();

    expect(newList.pop()).toBeUndefined();
  });

  it('pop() should return the updated length of the list', () => {

    let newList = new List();
    newList.push('foo');
    newList.push('bar');
    newList.pop();

    expect(newList.length).toEqual(1);
  });

  it('pop() should remove the last element of the list', () => {

    let newList = new List();
    newList.push('foo');
    newList.push('bar');
    console.log(newList);
    newList.pop();
    console.log(newList);

    expect(newList[newList.length - 1]).toEqual('foo');
  });
});