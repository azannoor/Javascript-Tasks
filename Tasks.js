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


// problem 4

let str = 'hello'
let reverse = ''
console.log(str.length)

for(let k = str.length-1;k>=0;k--){
   reverse += str[k] 
}
console.log(reverse)

//problem 5

let array1 = [1,2,3,4,5]
let sum=0;

for(let l = 0;l<=array1.length;l++){
   sum+=l
}
console.log(sum)

//problem 6

let array2 = [2,1,3,5,8,9]
let temp;

for(let i=0;i<=array2.length;i++){
   for(let j= 0;j<=array2.length;j++){
    if(array2[i]>array2[j]){
        temp = array2[i]
    }
   }
   
}

//problem 7

const leap = function(year){
    if(year%4===0 && year%100 !==0 ){
        console.log(`${year} is a leap year`)
    }
    else{
        console.log(`${year} is not a leap year`)
    }
}
leap(2024)

//problem 8 

let series = [0,1,1,2,3,5,8]

const fibonacci = function(index){
    let temp = series[index-1] + series[index - 2]
if(series[index]==temp){
    console.log(`${series[index]} is a Fibonacci number`)
}
else{
    console.log(`${series[index]} is not a Fibonacci number`)
}
}

fibonacci(6)

//problem 9