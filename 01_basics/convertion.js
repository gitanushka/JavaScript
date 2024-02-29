let score = 33
console.log(typeof score)
let score1 = "33"
console.log(typeof score1)
//conversion string to number
let valueInNumber = Number(score1)
console.log(typeof valueInNumber)
//if the string contains letters , after convertion to number, the datatype would be number but the value will be NaN(not a number)
let score2 = "33abc"
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

//value of null and undefined
let score3 = null
let valueInNumber2 = Number(score3)
console.log(valueInNumber2)

let score4 = undefined
let valueInNumber3 = Number(score4)
console.log(valueInNumber3)
//if boolean value then true becomes 1 and false 0
//string value that cant be converted to number gives NaN

let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

