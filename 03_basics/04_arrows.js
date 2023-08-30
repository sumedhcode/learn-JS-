// arrow function

// syntax
() => {} // syntax of arrow fucntions

let arrow = () => {} // also hold in a variable

// this in arrow function

let arrowFunc = () =>{
    console.log(this)
}

arrowFunc() // => returns an empty object

/* value of this inside an arrow function is determined
 by the surrounding context where the arrow function is defined, 
 not where it is called.in this case the arrow function refers to 
 the global object in node js enviroment */


// example
// const myArrow = (num1, num2) => {
//     return num1 - num2
// }

// implicit return
// const myArrow = (num1, num2) => num1 - num2

// const myArrow = (num1, num2) => (num1 - num2)

const myArrow = (num1, num2) => ({name : "sumedh"})