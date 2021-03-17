/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/
//Understand
// Accepting array and two callbacks as parameters
// Invoke two call back functions on each array element
// Return new array containing new array for which each callback is true
// Plan
// Add parameters
// Create answerArray
// Loop over array argument
    // If callback1 applied && callback2 applied is true, then push currEl into answerArray
// Return answerArray
let andSelect = function(array,callback1,callback2) {
    let answerArray = [];
    for (let i = 0; i < array.length; i++) {
        let currEl = array[i];
        if (callback1(currEl) && callback2(currEl)) {
            answerArray.push(currEl)
        }
    }
    return answerArray;
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
