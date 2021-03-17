/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
//Understand
  //accept value, number, and callback function
  //Apply the callback to the value 'number' of times
  //Return new value
//Plan
  // Add value, number, and callback as parameters
  // Create a for loop that involves n
    // Invoke callback
    // return value



let multiMap = function(value,number,callback) {
  let newVal = value;

  for (let i = 0; i < number; i++) {
    //console.log(newVal);
    newVal = callback(newVal);
  }
  return newVal;
};

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
