/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/
/*Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback. */
//Understand
//Take in array and callback
//If all are true, return true
//Otherwise return false
//Plan
//Add array,callback as parameters
// Loop over array
    // Invoke callback on the currEL of the array
    // If false, return false
//Return True

let myEvery = function(array,callback) {

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        if (!callback(currentEl)) {
            return false
        }
    }
    return true;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
