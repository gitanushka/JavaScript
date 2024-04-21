function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //setUsername function is called bt how do we access its execution context and its variables and methods thus .call method used and this is used to let it know current context
    SetUsername.call(this, userame)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);