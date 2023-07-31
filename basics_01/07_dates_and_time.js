// dates and time in javascript

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 24);

let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

let newDate = new Date();

newDate.toLocaleString('default', { //indicates that the method should use the default locale of the user's browser 
    weekday: "long",
})

/* The second argument is an options object used to customize the formatting of the date string. 
In this case, it specifies { weekday: "long" }, 
which means we want the output to include the full name of the day of the week 
(e.g., "Monday", "Tuesday", etc.).*/