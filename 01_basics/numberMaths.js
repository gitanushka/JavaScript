const score = 400
console.log(score)

//other way
const balance = new Number(100)
console.log(balance)
//different methods for Number datatype
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString())

// +++++ Maths ++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.min(4,8,2,9))
console.log(Math.max(78,12,45,9))

//random values always comes in a range from 0 to 1
console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)


