// flatten array
let nested = []
const flatten = function(array){
    
    for(let i = 0;i<array.length;i++){
        if(Array.isArray(array[i])){
            //console.log(array[i])
            flatten(array[i])
            
        }
        else{
            //console.log(array)
            nested.push(array[i])
        }
    }
}
flatten([1,[9,[2,53]],6])
console.log(nested)

// unique

const hasUniqueCharacters = function(string){

    let temp={}
    for(let i=0;i<string.length;i++){
        let c = string.charAt(i)
        console.log(c)
        if(temp[c]){
         temp[c]++
        }
        
        else{
         temp[c] = 1
        }
        
     }

     for(let char in temp){
          if(temp[char]>1){
            console.log("characters are not unique")
            return false
          }
          else{
            console.log("characters are unique")
            return true
          }
     
    
}

}

 let final = hasUniqueCharacters("acedfgch")
console.log(final)


//Anagram

const isAnagram = function(string1,string2){
    let stringOne={}
    let stringTwo={}

for(let i=0;i<string1.length;i++){
   let c = string1.charAt(i)
   if(stringOne[c]){
    stringOne[c]++
   }else{
    stringOne[c] = 1
   }
}
for(let i=0;i<string2.length;i++){
    let c = string2.charAt(i)
    if(stringTwo[c]){
     stringTwo[c]++
    }else{
     stringTwo[c] = 1
    }
 }

   //console.log(stringOne)
   //console.log(stringTwo)
   for(let char in stringOne){
      if(stringOne[char]!==stringTwo[char]){
          console.log("not anagram")
          return false
      }
      else{
        console.log("is an anagram")
        return true
      }
   //console.log(stringOne[char],stringTwo[char])
   }
}

const final1 = isAnagram("silent","listen")
console.log(final1)

// balanced paranthesis

const balanced = function(string){
    let stack =  []

    for(let i=0;i<string.length;i++){
       let char = stack[stack.length -  1]

       if(string[i]==='('||string[i]==='['||string[i]==='{'){
        stack.push(string[i])
       }
       else if(char === '(' && string[i] === ')' || char === '{' && string[i] === '}' || char === '['  && string[i] === ']' ){
        stack.pop(string[i])
       }
       else {
        console.log("not balanced")
        return false
       }
    } 
   
    console.log(stack)
    if(stack.length === 0){
        console.log("balanced")
        return true
    }
}

let final2 = balanced('{{}}')
console.log(final2)

// double map


const doubleMap = function(array){
    return array.map((arr)=>{
        return arr * 2
    })
}

console.log(doubleMap([1,2,3,4]))

// immutable object

const immutable = function(object){
return Object.freeze(object)
    
}
let mutable = {
    name:'azaan',
    age:'2'
}
immutable(mutable)
console.log(mutable)

// featch data

let myPromise = new Promise(function(resolve,reject){

 let fetch1 = fetch("https://dummyjson.com/products/1")

fetch1.then(response =>{
    return response.json()

})
.then(data => {
    resolve('data fetched successfully')
    console.log(data)
   
}).catch(err=>{
    console.log(err)
    reject('fetching unsuccessfull')
})

})

myPromise.then((message)=>{

    console.log(message)

}).catch((err)=>{
console.log(err)
})

// call back and delay

const hello = function(){
     console.log('hello')
}

const delayedGreeting = function(callback,seconds){
setInterval(callback,seconds)
}

//delayedGreeting(hello,1000)


// sumArray

const sumArray = function(array){
return array.reduce((acc,num)=>{
    return acc+num
})
}
console.log(sumArray([1,2,3,4]))

// deep copy

const deepCopy = function(object){
const deep = JSON.parse(JSON.stringify(object))
deep.a = 6
deep.b.c= 7
return deep
}

const originalObject = { a: 1, b: { c: 2 } };
console.log(deepCopy(originalObject))
console.log(originalObject)