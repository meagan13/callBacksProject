/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Understand
    Function accepts an array and a callback
    Apply the callback on each element of the array using element AND index
    Return a boolean - does exactly one result as true?
Plan
    Use a for loop to iterate over the array and determine if it is true or false
    How to tell if exactly one is true?
    Hold the current element in a variable - if the next one is the same return false?
*/

let one = function(array, callback) {
    let trueCounter = 0;

    for(let i = 0; i < array.length; i++) { //loop over the array
        let currentEl = array[i];

        if(callback(currentEl, i)) {        //if the return of the callback on the el is true
            trueCounter++;                  //increase the true counter by 1
        }
    }

    return (trueCounter === 1);                 //Boolean - is exactly one true?

};


let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true
/*
let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true
*/

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = one;
