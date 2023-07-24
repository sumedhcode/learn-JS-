// we use variables to store data values.

// old ways to declare variable is using var keyword
var myAge = 29; // declaring a variable
// console.log(myName);

// var has block scope issue for example
 function outputMyAge() {
    var myAge = 39; // defined in the block curly braces "{}"
    console.log(myAge);
}

// can see the conflict in the Result-
var myAge = 40; // redeclaring age outside of the block 
console.log(myAge); // logs 40
outputMyAge(); // logs 39 - this can leads to conflict 


// later JS include let or const for solving the block scope problem

let myName = "Sumedh"; // variable outside of the block can be accessed anywhere in the program

function outputMyName() {
    let mySecondName = "Om" // declaring variable using "let" only accessed inside the block of code
    console.log(mySecondName);
}

 // cannot be accessed outside 
console.log(mySecondName); // Throws an ReferenceError
let mySecondName = "Suresh"; // cannot be redeclare like var

// declaring variable using const
const myBirthDate = "4 May 2002";

// variable declared with const cannot be changed or reassigned like var and let
myBirthDate = "9 March 2005"; // this will give an Type error

// SUMMAURY
// dont use var for declaring variables always use const keyword
// if the value is changing use let keyword
// let and const keyword have an block scope
// variables declared with let cannot be redeclare but can reassign a new value
// variables declared with const cannot be reassigned and redeclare
// variables declare with var can be reassigned and redeclare and dont have block scope