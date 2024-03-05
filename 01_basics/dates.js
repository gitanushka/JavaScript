//Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//let myCreatedDate = new Date(2024, 0, 23)
//let myCreatedDate = new Date(2024, 0, 23, 5,3)
//let myCreatedDate = new Date(2024, 0, 23)
let myCreatedDate = new Date("2024-01-23");
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
//the below time in millisec would from the date mentioned in js doc till now
let myTimeStamp = Date.now();
console.log(myTimeStamp)
//below time would be from fixed date in doc till the date stored in myCreatedDate variable 
console.log(myCreatedDate.getTime())

//to have the ans in seconds (asked in interviews)
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
//+1 since 0 index format
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//1st argument : which intertaionalization
//can customize the argumentsz inside object
newDate.toLocaleString('default',{
    weekday: "long",
})