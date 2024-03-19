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