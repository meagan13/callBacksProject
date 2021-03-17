/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

Examples:

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/
/*Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.*/

//Understand
    //Accept two parameters: array and callback
    //Invoke callback for every element and its index
    //If element is true, return true, else return false
//Plan
    //Add parameters
    //Loop over the array argument
        //Invoke callback for each element and its index
        // If true, return true
    // return false

let mySome = function(array,callback) {
    let answer = false
    for (let i = 0; i < array.length; i++) {
        let currEl = array[i];
        if (callback(currEl,i)) {
            answer = true;
        }
    }
    return answer;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySome;
