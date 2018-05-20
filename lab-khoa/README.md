[![Build Status](https://travis-ci.com/khuynh92/02-tools-and-context.svg?branch=master)](https://travis-ci.com/khuynh92/02-tools-and-context)

### list.js

the values that are being exported from the list.js module is a class with the methods: 
 * push()
    * has an arity of one
    * data-type is not restricted
    * expected behavior for valid use is to return the new length of the List and also set the argument as the value of that key. List.length is also incremented by 1
 * pop()
    *   has an arity of zero
    *  expected behavior for valid use is to delete the last key value pair in the List and also to reduce the length of the list by 1.
    * expected behavior for invalid use is to return undefined when the length of the list is 0.
 * forEach()
    * has an arity of one
    * data-type is a function
    * expected behavior for valid use is to apply the inputted function across all elements in the list. Return undefined
    * expected behavior for invalid use is to return an error message for when data-type is not a function
* map()
    * has an arity of one
    * data-type is a function
    * expected behavior for valid use is to apply the inputted function across all elements in the list. Return modified list
    * expected behavior for invalid use is to return an error message for when data-type is not a function.
* filter()
    * has an arity of one
    * data-type is a function
    * expected behavior for valid use is to apply the inputted function across all elements in the list. If the function returns true for that element, add it to a new list. Return modified list. If no elements return true when used in the function, return an empty array.
    * expected behavior for invalid use is to return an error message for when data-type is not a function.
* reduce()
    * has an arity of one
    * data-type is a function
    * expected behavior for valid use is to apply the inputted function across all elements in the list. each value is added to the first index of the list, or the supplied initial value(optional argument). the return value is the sum of all elemented combined together 
    * expected behavior for invalid use is to return an error message for when data-type is not a function.