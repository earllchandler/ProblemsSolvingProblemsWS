"use strict";

// ProblemSolvingProblemsI

// Number 1

function reverseString(str) {

    // empty string
    let newString = "";
    for (let index = str.length - 1; index >= 0; index--) {
        newString += str[index];
    }
    return newString;
}

// take input from the user
let string = prompt("Enter a string: ");

let result = reverseString(string);
console.log(result);


 // Number 2

function titleCase(string) {
    // .toLowerCase()
    // .split(''); 
   var splitStr = string.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // Assign it back to the array
       //charAt(0) Locates whatever is at the 0 index of the variable/Array/string
       //.toUpperCase() Returns the specified variable/Array/string to a capital letter8
       //.substring(1)
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

console.log(titleCase(prompt("Enter your preffered string")));

// Number 3

function stringCompression(strComp) {
    if (strComp.length === 0) {
      console.log(promp("Please enter valid string."));
      return;
    }
    let output = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
      if (strComp[i] != strComp[i+1]) {
        output += strComp[i] + count;
        count = 0;
      }
    }
    console.log(output);
  }
  
  stringCompression(''); //Please enter valid string.
  stringCompression('aaaa'); //a4
  stringCompression('aaaabbc'); //a4b2c1
  stringCompression('aaaabbcaabb'); //a4b2c1a2b2