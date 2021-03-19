/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

Understand:
    Accept an array and two callbacks
    Return a new array
        - add the results of invoking the callbacks, alternating between the results of cb1 and cb2
Plan:
    Create a new array
    Loop over the array
    Invoke the callbacks and push to the new array
*******************************************************************************/

const greaterCallbackValue = require("./19-greater-callback-value");


let alternatingMap = function(array, cb1, cb2) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        let currentEl = array[i];

        if(i % 2 === 0) {                       //if the index is even
            console.log(currentEl);
            newArray.push(cb1(currentEl));
            console.log(newArray);    //invoke cb1 and push the result to the array
        }

        if(i % 2 !== 0) {
            console.log(currentEl);
            newArray.push(cb2(currentEl));      //invoke cb2 and push the result to the array
            console.log(newArray);
        }

    }
    return newArray;
};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = alternatingMap;
