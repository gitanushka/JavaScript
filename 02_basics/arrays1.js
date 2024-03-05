//arrays

const myArr = [1,2,3,4,5]
console.log(myArr[0]);
//can store mixed datatype values
const Arr1 = [8, "anushka", 45]

const Arr2 = new Array(1,2,3,4)
console.log(Arr2[3]);

//Array Methods
console.log(myArr);
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);
//push the value at start of array
myArr.unshift(9);
console.log(myArr);
//remove the value from start of the array
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

//arrays are being shallow copied it means that it points to the reference thus changes made will be reflected to the original

const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)

// slice, splice (diff asked in interviews)

console.log("A", myArr);
//in the slice method the later argument in not included
const myn1 = myArr.slice(1,3)
console.log(myn1);
//in the splice method , it changes the original array and return the values splitted from array
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
//the original array becomes :
console.log( "C", myArr);
