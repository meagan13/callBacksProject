/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/
/*Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.*/

//Understand
//  Accepts array, call back as aruguments
//  On each element of the array, use a call back function
//  Return
//Plan
//  Initialize an answer array
//  For loop
//  For every element, use a call back function on the element
//  Push each element into answer array
//  Return answer array

let myMap = function(array, callback) {
    let answerArray = [];

    for(let i = 0; i < array.length; i++) {
        let curPos = callback(array[i]);

        answerArray.push(curPos);
    }
    return answerArray;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
