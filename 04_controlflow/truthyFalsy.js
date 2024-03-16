//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values

//"0", 'false' , " " (bcz they are inside string), [], {}, function(){}

//Nullish Coalescing operator (??): null, undefined

//This operator is mainly used when any value is coming from a database or a response so if null arrived and disrupt other code better to use this

let val1;
val1 = null ?? 5
console.log(val1)