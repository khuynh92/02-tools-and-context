const List = require('../../lib/list');

describe('List Module', () => {

  it('toArray() index should be the same as List', () => {
    let array = [1,2,3,4,5];
    let newList = new List(array);
    
    expect(newList.length).toEqual(array.length);

  });
  
  it('toArray() should take the list and create an array', () => {
    let newList = new List([1,2,3,4,5]);
    
    expect(newList.toArray()).toEqual([1,2,3,4,5]);

  });

  it('toArray() should take the list and create an array', () => {
    let newList = new List([1]);
    
    expect(newList).toEqual({'0': 1, length: 1});

  });

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
    newList.push('soda');
    newList.push('pop');
    newList.pop();

    expect(newList[newList.length - 1]).toEqual('soda');
  });

  it('forEach() should return an error message if argument is not a function', () => {
    let newList =  new List();

    expect(newList.forEach('hello')).toEqual(`error, hello is not a function`);
  });

  it('forEach() should return undefined when a function is passed through', () => {
    let newList = new List();
    newList.push(1);
    let expected = newList.forEach(element => element/2);

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
    let actual = {'0': 10, '1': 20, length: 2};

    expect(expected).toEqual(actual);
  });

  it('map() should apply a function to every element in the array', () => {
    let newList = new List();
    newList.push(5);
    newList.push(10);
    let multList = newList.map(element => element*2);

    expect(multList[1]).toEqual(20);
  });

  it('map() should not change the original array', () => {
    let newList = new List();
    newList.push(5);
    newList.push(10);
    newList.map(element => element*2);

    expect(newList[1]).toEqual(10);
  });

  
  it ('filter() should return an error message if argument is not a function', () => {
    let newList = new List();

    expect(newList.filter('hello')).toEqual('error, hello is not a function');
  });

  it('filter() should apply a function to every element of a list, if the statement returns true, then add it to a new array.', () => {

    let newList = new List();
    newList.push(5);
    newList.push(10);
    newList.push(15);

    let expected = newList.filter(number => number > 9);
    let actual = { '0': 10, '1': 15, length: 2};

    expect(expected).toEqual(actual);
  });

  it('filter() should return an empty list if no results pass as true', () => {
    let newList = new List();
    newList.push(5);
    newList.push(10);
    newList.push(15);

    let expected = newList.filter(number => number > 21);
    let actual = {length: 0};

    expect(expected).toEqual(actual);
  });

  it('filter() should not change the original array', () => {

    let newList = new List();
    newList.push('Hello');
    newList.push('Darcy');
    newList.filter(element => typeof element === 'number');

    expect(newList[1]).toEqual('Darcy');
  });

  it('reduce() should return an error message if a function is not passed in as an argument', () => {

    let newList = new List();

    expect(newList.reduce('JB is a great teacher!')).toEqual('error, JB is a great teacher! is not a function');
  });

  it('reduce() should start with the first index of the list if no second parameter is given', () => {
    
    let newList = new List([5, 10, 30]);
    let expected = newList.reduce((a, b) => a + b);
    
    expect(expected).toEqual(45);
  });

  it('reduce() should allow an optional argument', () => {

    let newList = new List([100, 200, 300]);

    expect(newList.reduce((a, b) => a + b, 100)).toEqual(700);
  });

  it('reduce() should allow an strings', () => {

    let newList = new List(['laurel', 'yanny']);

    expect(newList.reduce((a, b) => a + ' and ' + b)).toEqual('laurel and yanny');
  });
});