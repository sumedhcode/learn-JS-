
// syntax
reduce(callbackFn)
reduce(callbackFn, initialValue)


const myNums = [1, 2, 3] 
 


const myTotal = myNums.reduce(function (accumulator, currentvalue) { // 
    console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
    return acc + currval
}, 0) // initializing the accumulator

/*The reducer walks through the array element-by-element, at each step adding the current array value to the result from 
the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add. */

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // arrow function

console.log(myTotal);

// adding price 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);