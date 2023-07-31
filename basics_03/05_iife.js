// immediately invoked function expression

// Sometimes we want our function to execute immediately and dont want to get polluted by the global variables

// 

(function immediateFunction(){
    // named function
    console.log("IIFE");
})();

( (userName) => {
    console.log(`IIFE ${userName}`);
} )("sumedh");
