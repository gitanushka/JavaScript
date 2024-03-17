const myNums = [1, 2, 3, 4, 5, 6]

//...................filter................

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums)

const newNums = myNums.filter( (num) => {
    return num > 4
} )

//using for each

// const newNums = []

// myNums.forEach( (num) =>{
//     if(num>4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums)

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

let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => {return bk.publish >= 1995} )

console.log(userBooks)



//.....................map..............
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNumbers.map( (num) => num + 10)
console.log(newNum)

//chaining methods

const numNew = myNumbers
                .map( (num) => num*10 )
                .map( (num)=> num+1 )
                .filter( (num)=> num>=40 )

console.log(numNew)


//...............reduce.................

const number = [1,2,3]
// initial value 0 is assigned to acc and acc+currval returned to acc 
// const myTotal = number.reduce( function (acc,currval) {
//    console.log(`accumulator: ${acc} and currentvalue: ${currval}`);   
//    return acc+currval
// }, 0 )

//using arrow function

const myTotal = number.reduce( (acc,currval) => (acc+currval), 0)

console.log(myTotal)

const shoppingCart = [
  {
     course: 'javascript',
     price: 299
  },
  {
    course: 'cloud',
    price: 599
  },
  {
  course: 'python',
  price: 399
  }
]

const totalPrice = shoppingCart.reduce( (acc,item) => (acc+item.price),0 )
console.log(totalPrice)