/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/
/*Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.*/
//Understand
    //Take in parameters array and callback
    //Apply callback to each element of the array
    // If false, push element to new array
    // Return new array
//Plan
    //Add paramenters
    // Initialize empty array
    // Loop over array argument
        //Invoke callback function to currEl
        //If false, push to new array
    //Return new array
let reject = function(array,callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let currEl = array[i];
        if (!callback(currEl)) {
            newArray.push(currEl);
        }
    }
    return newArray; 
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
