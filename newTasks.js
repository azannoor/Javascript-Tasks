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

