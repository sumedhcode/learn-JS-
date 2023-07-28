// lets now talk about functions
// functions are the processing unit of the program
// we package all the code into a function to reuse it when we need

// function defination-
function functionName(parameter) {
    console.log(parameter); // the function body
}

console.log(functionName(3)); // => 3 and undefined, calling the function with an argument 3

// return keyword
function multiply(param){
    return param * 3;
}

//  console.log(multiply(2)) // => undefined, without return keyword
console.log(multiply(2)) // => 6, with return keyword

// return keyword returns the value we passed in 