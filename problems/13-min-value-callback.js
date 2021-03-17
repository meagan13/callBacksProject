/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
//Understand
//  Accepts an array and optional callback
//  Differentiate if callback and not-callback
//  Iterate through array
//      Hold min value
//      Return min value

//Plan
//  Create current minValue variable
//  If callback === undefined, iterate through and hold minValue
//  If callback is defined, iterate through array and hold minValue
//  Return minValue

let minValueCallback = function(array, callback) {
    let curMinVal = -Infinity;

    if(callback === undefined) {
        for(let i = 0; i < array.length; i++) {
            let curVal = array[i];

            if(curVal < curMinVal || curMinVal === -Infinity) {
                curMinVal = curVal;
            }
        }
    } else {
        for(let i = 0; i < array.length; i++) {
            let curVal = array[i];

            if(callback(curVal) < curMinVal || curMinVal === -Infinity) {
                curMinVal = callback(curVal);
            }
        }
    }
    return curMinVal;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
