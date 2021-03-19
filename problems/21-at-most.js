/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Understand:
    Accepts an array, a max number, and a callback
    Return a boolean
        - Is the number of true results equal to or fewer than the max number?
Plan:
    Create a true counter
    Loop over the array
        -Apply the callback
        -If invoking the callback results in true, increase true counter
    If the true counter is less than or equal to the max, return true

*******************************************************************************/

let atMost = function(array, max, callback) {
    let trueCounter = 0;

    for(let i = 0; i < array.length; i++) {
        let currentEl = array[i];

        if(callback(currentEl) === true) {
            trueCounter++;
        }
    }

    return (trueCounter <= max);
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = atMost;
