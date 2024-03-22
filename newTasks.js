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

