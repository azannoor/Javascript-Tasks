//problem 1

const check = function(num){
    if(num%2 === 0){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
    
    }

    // problem 2

const factorial = function(num1){
    let temp = 1
    for(let i = 1;i<=num1;i++){
        temp*= i; 
    }
    return temp
    }

    console.log(factorial(6))

// problem 3
let people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
    ];

   const [object1,object2,object3] = people
console.log(object1,object2,object3)

const {name:name1,age:Age1} = object1
const {name:name2,age:Age2} = object2
const {name:name3,age:Age3} = object3

console.log(name1,Age1)
console.log(name2,Age2)
console.log(name3,Age3)