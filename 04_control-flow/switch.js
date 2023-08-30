// there is another conditional statement if we have multiple choices known as "switch"

// in this we check different case values for a given key:

// syntax

switch (key) {
    case value:
        
        break;

    default:
        break;
}

let productRatings = 5; // we can also take string as the value

switch (productRatings) {
    case 1:
        console.log("bad Reviews");
        break; // the keyword used to break the program flow, if not the program will continue execute another case
    case 2:
        console.log("need to fix something");
        break;
    case 3:
        console.log("need to improve");
        break;
    case 4:
        console.log("good work");
        break;
    case 5: // if any case matches only the code after that will be execute 
        console.log("great work");
        break;

    default: // if none of the cases match code inside default statement will be run
        console.log("Nothing to show");
        break;
}