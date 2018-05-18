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

  it('pop() should return the removed value', () => {

    let newList = new List();
    newList.push('foo');
    newList.push('bar');

    expect(newList.pop()).toEqual('bar');
  });

  it('pop() should remove the last element of the list', () => {

    let newList = new List();
    newList.push('foo');
    newList.push('bar');
    newList.pop();

    expect(newList[newList.length - 1]).toEqual('foo');
  });

  it('forEach() should return an error message if argument is not a function', () => {
    let newList =  new List();
    expect(newList.forEach('hello')).toEqual(`error, hello is not a function`);
  });

  it('forEach() should return undefined when a function is passed through', () => {
    let newList = new List();
    newList.push(1);
    let expected = newList.forEach(element => console.log(element));
    expect(expected).toBeUndefined();
  });

  it('forEach() should apply the function given in as an argument to each element in the list',() => {
    let newList = new List();
    newList.push(2);
    newList.push(10);
    let listPlusOne = new List();
    newList.forEach(element => listPlusOne.push(element+1));

    expect(listPlusOne[1]).toEqual(11);
  });

  it('map() should return an error message if argument is not a function', () => {
    let newList = new List();
    expect(newList.map('hello')).toEqual('error, hello is not a function');
  });

  it('map() should return the new updated list', () => {
    let newList = new List();
    newList.push(5);
    newList.push(10);
    let expected = newList.map(element => element*2);
    let actual = `{0: 10, '1': 20, length: 2}`
    expect(expected).toEqual(actual);
  });

  it('map() should apply a function to every element in the array', () => {
    let newList = new List();
    newList.push(5);
    newList.push(10);
    let multList = newList.map(element => element*2);

    
    expect(multList[1]).toEqual(20);
  });
  


  
});