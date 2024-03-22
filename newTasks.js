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


//

