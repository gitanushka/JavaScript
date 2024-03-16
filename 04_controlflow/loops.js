//for of loop

//array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}
//string
const greeting = "Hello Anushka"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"United States Of America")
map.set('Fr',"France")

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key, ':-' ,value);
}

//objects

const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby"
}

//..... for of loop doesnt iterate for object...

//for in loop

// for (const key in myObj) {
//         console.log(key);
// }

for (const key in myObj) {
     console.log(`${key} stands for ${myObj[key]}`)
}


//for each loop

const coding = ["js", "ruby", "java", "python"]

// coding.forEach( function(val){
//     console.log(val)
// } )

coding.forEach( (val) => {
    console.log(val)
} )

// coding.forEach( (item,index,arr) => {
//       console.log(item, index, arr)
// } )

// ......For Each Loop for array of objects......

const myCoding = [
    {
        langName: "Javascript",
        langFile: "js"
    },
    {
        langName: "Python",
        langFile: "py"
    },
    {
        langName: "C++",
        langFile: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName)
} )

