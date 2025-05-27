// let input = ["h","o","l","a"]
// let result = ""
// for(let i = 0;i < input.length;i++){
//     result =  result + input[i] + ','
// }

// console.log(result)

// console.log(result)
// let result = ''
// console.log(typeof result)
// for(let i = 0; i < input.length; i++){
//     console.log(typeof input[i])
//     input[i] + result 
// }

// console.log(result)




// function arrowUp(){
//     return 'up'
// }

// function arrowDown(){
//     return 'down'
// }

// function arrowLeft(){
//     return 'left'
// }

// function arrowRight(){
//     return 'right'
// }


// console.log(arrowDown());

//let xArr = ["A" , 0 , "A" , 1 , "B" , 12]



//1. Easy – Sum of All Elements
//Problem: Given an array of numbers, return the sum of all elements.

function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; 
    }
    return sum; 
}

console.log(sumArray([1, 2, 3, 4])); 




//2. Medium – Remove Duplicates
//Problem: Write a function that removes duplicates from an array.

function removeDuplicates(arr) {
    let uniqueArr = []; 
    for (let i = 0; i < arr.length; i++) { 
        if (uniqueArr.indexOf(arr[i]) === -1) { 
            uniqueArr.push(arr[i]); 
        }
    }
    return uniqueArr; 
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 