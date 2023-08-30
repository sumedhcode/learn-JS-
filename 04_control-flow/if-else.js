/* till now we execute our code entirely without any type of condition 
that is there is no control over the program to execute the code or not 
to acheive this we use conditional statements to control the flow of 
the program we write*/

// if statement

let myName = "Sumedh"

if (myName == "Sumedh") {
    // console.log(`Hello ${myName}`); // => Hello Sumedh
}

// syntax

let condition =  true
condition = false // => code will not be executed
if(condition) {
    console.log("Execute"); // the body, this will only execute when the condition is true
}


// if-else 

let isEighteenPlus = 21
isEighteenPlus = 17 // => else block will be execute

if(isEighteenPlus >= 18) {
    console.log("great");
} else {
    console.log("you are not eligible"); // outputs when if statement evaluate to false
}

// some comparison operators, we use this in our condition
// <, >, <=, >=, ==, ===, !=, !==


// the block scope - {}

if(true) {
    let myPoints = 100
}

// console.log(`myPoints: ${myPoints}`); // => ReferenceError, cannot access myPoints

// implicit scope
let points = 1000

if(points === 1000) console.log(points); // we are assume that there is a block after condition

// we can also use comma for the next line but this is not a good practice and should be avoid:
if(points === 1000) console.log(points),console.log(`your points: ${points}`);  


// AND and OR operator also called logical operators

let productPrice = 1999;
let isConfirm = true;
let watchPrice = 799;
let haveCoupenCode = true

// AND OPERATOR
if(productPrice > 1000 && isConfirm) {
    console.log("Free delivery"); // only outputs when all the conditions evaluates true 
}

// OR OPERATOR
if(watchPrice > 1000 || haveCoupenCode) {
    console.log("50% discount"); // atleast one of the condition should evaluates true to execute
}

if(productPrice > 1000 && isConfirm && haveCoupenCode){
    console.log('Free delivery + 50% discount');
}

// else-if statment for multiple choices

let productWarrentyYears = 1

if(productWarrentyYears < 5 && productWarrentyYears > 1){
    console.log("decent quality");
} else if(productWarrentyYears === 5){
    console.log("good quality");
} else if(productWarrentyYears > 5){
    console.log("great quality");
} else{  
    console.log("bad quality :("); // if any condition matches that code block will be execute
}