/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL

Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.
*******************************************************************************/
//Understand
//  Accepts a sentence and an object
//  Words from original sentence are modified according to the function found at the corresponding suffix key
//  If a word does not end in any of the suffix keys, do not modify
//  Return the new sentence
//Plan
//  Add parameters to the function
//  Convert the sentence to an array using split at spaces
//      Loop over the sentence array
//      If the current word string ends with the obj key, apply the callback function to the current word and push to the new array
//      Else, replace the current word in the array with the current word (can't push bc it will push twice)
//  Return the new array as a sentence

let suffixCipher =  function(sentence, obj) {

    let sentenceAsArray = sentence.split(' ');              //convert the sentence string into an array of words

    for(let i = 0; i < sentenceAsArray.length; i++) {       //loop over the array
        let currentWord = sentenceAsArray[i];               //create a variable for the current word

        for(let key in obj) {                                //loop over the keys
            if(currentWord.endsWith(key)) {                   //if the current word ends with the key
            sentenceAsArray[i]=(obj[key](currentWord));       //push the obj key value (function) to the current word
            }
        }
    }
    return sentenceAsArray.join(' ');
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
