// this is really important keyword that refers to the current context of an object

/* the this keyword is a special identifier that 
 refers to the current execution context,
 specifically the object on which 
 the current code is being executed.
 The value of this depends on 
 how and where a function is called 
 */

// this can be a bit confusing because it can change depending on the context in which it's used.

 console.log(this); // In browsers, it refers to the 'window' object


// Function context:
 function myFunction() {
    console.log(this);
  }
  
  myFunction(); // In browsers, it refers to the 'window' object
  

let anyObject = {
    myName: "Sumedh",
    myAge: 21,
    myCity: "Pune",
    myIntro: function(){
        console.log(`Hello my name is ${this.myName}`);
    }
}


anyObject.myIntro() // When a function is called as a method of an object, this will refer to the object itself.

function myFunction() {
    let myBirthdate = "4th may"
    // console.log(`Wish me at ${myBirthdate}`);
}

// myFunction();