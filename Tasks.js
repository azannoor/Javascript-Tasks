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

let arrayNum = [2,1,3,5,8,9]
let temp;

for(let i=0;i<=arrayNum.length;i++){
   for(let j= 0;j<=arrayNum.length;j++){
    if(arrayNum[i]>arrayNum[j]){
        temp = arrayNum[i]
    }
   }
   
}

//problem 7

const leap = function(year){
    if(year%4===0  && year%100 !==0 || year%400 === 0){
        console.log(`${year} is a leap year`)
    }
    else{
        console.log(`${year} is not a leap year`)
    }
}
leap(2023)

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

fibonacci(10000)

//problem 9

let word = 'PAkistan'
let count = 0

for(let i = 0;i<word.length;i++){
    if(word[i] == 'a' || word[i] == 'A'|| word[i] == 'e' || word[i] == 'E' 
    || word[i] == 'i' || word[i] == 'I' || word[i] == 'O' || word[i] == 'o' || word[i] == 'u' || word[i] == 'U'){
        count++
    }
}

console.log(count)

//problem 10

let sorted = [9,3,4,10,1,5]
let temp1

for(let a=0;a<sorted.length;a++){
    
    for(let b=0;b<sorted.length;b++){

        if(sorted[a]<sorted[b]){
            temp1 = sorted[a]
            sorted[a] = sorted[b]
            sorted[b] = temp1
            
        }
    }
    
} 
console.log(sorted)

//problem 11


let string = 'my name is azaan'

let sentence = string.split(" ")
let words,temp11


for(let i = 0;i<sentence.length;i++){
    word = sentence[i]
    temp11 = word.replace(word[0],word[0].toUpperCase())
    sentence[i] = temp11
   
}
let newString = sentence.join(" ")
console.log(newString)

//problem 12


let duplicateArray = [1,2,3,3,4]
const remove = (duplicateArray)=>{
    return duplicateArray.filter((element,index)=>{
        console.log(duplicateArray.indexOf(element),index)
        return duplicateArray.indexOf(element)  === index
     })
}
console.log(remove(duplicateArray))

//palidrome


const checkPalindrome = function(string){
    let length = string.length - 1
for(let i=0;i<string.length;i++){
    if(string[i] === string[length--]){
        console.log("string is a palindrome")
        
    }
    else{
        console.log("string is not a palindrome")
        break
    }
}
}

checkPalindrome("refer")

// longest word

let LongString = 'my name is azaan';

let AllWords = LongString.split(" ");

let longestWord = ''

for (let i = 0; i < AllWords.length; i++) {
   if(AllWords[i].length > longestWord.length){
    longestWord = AllWords[i]
   }
}
console.log(longestWord)

