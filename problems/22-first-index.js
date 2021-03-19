/*******************************************************************************
Write a function `firstIndex` that accepts an array and a callback as arguments.
The function should return the index of the first element of the array that
results in true when passed into the callback. If no elements of the array
result in true, then the function should return -1.

Understand:
    Function accepts an array and a callback
    Pass the elements through the callback - find first that results true
    Return the index of the first array element that results true
    If no elements are true, return -1

Plan:
    Loop over the array
    Invoke the callback for every element
    If the result is true, return the index of that element


*******************************************************************************/

let firstIndex = function(array, callback) {

    for(let i = 0; i < array.length; i++) {
        let currentEl = array[i];

        if(callback(currentEl) === true) {      //if invoking the callback on the currentEl returns true,
            return i;                           //return the index of currentEl
        }
    }

    return -1;                                  //otherwise, return -1
};


let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = firstIndex;
