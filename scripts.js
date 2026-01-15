/*var x = 10
var y = 15

if(y >10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
    let a=5
    console.log(a)
}

console.log(a)

for(
    let i=0; i<5; i++) {
    console.log(i)
}
console.log(i)

function logName(){
 const name = 'Gio'
 console.log(name)
}

const name = 'Moraes'

logName()

console.log(name)*/

// arrow function

const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

console.log(sum(5, 5))
console.log(arrowSum(5, 5))