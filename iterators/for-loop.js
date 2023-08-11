// for

// syntax

for (let i = 0; condition; i++) { /* we first declare or initialize the variable then if the codition is true:
    // body,                        body will be execute, before go the next line. value of the variable changes 
                                    and again we check if the codition is true and this cycle repeats */
}


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 4) {
        //console.log("4 is my birthday number");
    }
    //console.log(element);
    
}

// console.log(element);

// nested loops

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) { // this loop will execute 10 for every iteration of outer loop
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

// looping through array using for loop
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
}