/*******************************************************************************


Examples:

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false

Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Understand:
    Accept an array and a callback
    Call the callback for each element of the array
    If all elements passed through the call back are false, return true
Plan:
    Create a false counter
    Loop over the array
    Invoke the callback with every element
    If the false counter equals the length of the array, return true
    Else, return false
*******************************************************************************/

let none = function(array, callback) {
    let falseCounter = 0;

    for(let i = 0; i < array.length; i++) {
        let currentEl = array[i];

        if(callback(currentEl) === false) {
            falseCounter++;
        }
    }

    return falseCounter === array.length;    //Is the number of false returns is the same as the number of elements?
};


let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = none;
