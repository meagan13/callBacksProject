/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]

Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Understand:
  Accepts an array and two callbacks
  Returns a new array
  New array contains all elements that results in true from exactly one callback

Plan:
  Create a new array
  Loop over the array
  If the current element is true for cb1 or cb2 but NOT for cb1 AND cb2, push to the new array

*******************************************************************************/

let xorSelect = function(array, cb1, cb2) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    let currentEl = array[i];

    if((cb1(currentEl) || cb2(currentEl)) && !(cb1(currentEl) && cb2(currentEl))) {
      newArray.push(currentEl);
    }
  }
  return newArray;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
