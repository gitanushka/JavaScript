//functions in js

function addNumber(num1, num2){
    //console.log(num1 + num2);
    return num1+num2
}
addNumber(3, 4)

const result = addNumber(3,4) 
// this will give result as undefined since console just print the output do not return
console.log(result);

function loginUserMessage(username){
   if(!username){
    console.log("Enter username");
    return;
   }
    return `${username} just logged in`
}

console.log(loginUserMessage("Avika"))


//cases where we dont know how many arguments would be there

//here ... is called rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

//function with object

const user = {
    username: "Steven",
    price: 199
}

function handleObject(anyobject){
    console.log(`name is ${anyobject.username} and price is ${anyobject.price}`);
}
//to call the function with already made object
//handleObject(user)

//function call by passing object with its properties and values 

handleObject({
    username: "Steven",
    price: 2000
})

//functions with array

function returnValue(getArray){
    return getArray[2]
}

console.log(returnValue([200,300,400,500]))