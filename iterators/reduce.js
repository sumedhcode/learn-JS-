const myNums = [1, 2, 3] 
 
const myTotal = myNums.reduce(function (accumulator, currentvalue) { // 
    console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
    return acc + currval
}, 0) // initializing the accumulatoe

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