// in variables we know that let and const keyword has the block scope lets discuss it 
// block scope or just scope is nothing but the curly braces- {} 

if(true){
    var a = "Sumedh" // can access outside of the block
    let b = "Varun"  // cannot access outside of the block
    const c = "Nikhil"
}


// console.log(b); // => b is not defined,
// console.log(c); // => c is not defined,
// console.log(a); // => Sumedh, can accessed but this is not good

 
function block(){ 
    let userName = "sumedh"; // cannot access outside of the block
    var secondName = "Om" 
    return secondName   
}

// console.log(userName) 
// console.log(secondName) // => secondName is not defined,
// block()

/* we cannot access even the var becuase in Javascript, 
variables declared with the var keyword have function scope, 
not block scope. */

// nested scopes

function bigBlock(){
    let vanillaIcecream = "vanilla"
    
    function smallBlock(){
        let choclateIcecream = "choclate"
        console.log(vanillaIcecream); // small can get the vanilla :) 
        
    }
    console.log(choclateIcecream); // => choclateIcecream is not defined
}

bigBlock()