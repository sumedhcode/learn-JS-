// for each loop does not return the value we give

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// storing in a variable
// const values = coding.forEach( (item) => {
    //console.log(item);
    // return item // not return even we explicitly write

// } ) // so if we want some value with some cndition we cannot get it 

// console.log(values);

// filter method

// Syntax
// let store = myNums.filter( (element) => {return condition}) // returns the elements which satisfy the condition

const newNums = myNums.filter( (num) => {return num < 4} ) // => 1, 2, 3

// console.log(newNums);

// using filter to filer-out results

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userFilter = books.filter( (obj) => { return obj.title === 'Book Seven' && obj.genre === 'History'})

  let userFilter2 = books.filter( (item) => item.publish > 2000 && item.genre === 'Science' )

  console.log(userFilter);
  console.log(userFilter2);