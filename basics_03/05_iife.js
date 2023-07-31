// immediately invoked function expression

// Sometimes we want our function to execute immediately and dont want to get polluted by the global variables

// also we can create a private scope to work with and also declare private variables and methods which is limited to the IIFE

(function immediateFunction(){
    // named function
    console.log("IIFE");
})();

( (userName) => {
    console.log(`IIFE ${userName}`);
} )("sumedh");
