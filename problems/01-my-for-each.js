/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/

/*Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.*/

//Understand
//  Accepts array, call back as aruguments
//  On each element of the array, use a call back function
//  No need to return anything
//Plan


let myForEach = function(array, callback) {
    //  For loop
    for(let i = 0; i < array.length; i++) {
    //  For every element, use a call back function on the element
        callback(array[i]);
    }
};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myForEach;
