const user = {
    username: "anu",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

//creating multiple user and setting their values

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("Avi", 12, true)
const userTwo = new User("August", 16, false)

console.log(userOne);
console.log(userTwo);