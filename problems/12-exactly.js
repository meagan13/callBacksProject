/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/
/*Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback. */
//Understand
// Accepting array, number, & callback
// Check to see if exactly number elements that pass true
// If so return true, if not return false
// Plan
// Add parameters
// Create truetracker count
// Iterate through array
    //If callback applied to currEl is true
        // increment truetracker
// If truetracker === number, return true
let exactly = function(array, number, callback) {
    let count = 0;
    for (let i = 0; i < array.length;i++) {
        let currEl = array[i];
        if (callback(currEl)) {
            count++;
        }
    }
   return (count === number)
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
