class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //static keyword : Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself
    static createId(){
        return `123`
    }

}

const avika = new User("avika")
console.log(anushka.createId());


//for interview purpose 

//bind in js video

