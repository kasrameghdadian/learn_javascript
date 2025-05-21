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


let xArr = ["A", 0, 1, "B", true, false];

let s = 0;
let n = 0;
let b = 0;

for (let i = 0; i < xArr.length; i++) {
  if (typeof xArr[i] === "string") {
    s = s + 1;
  }
  if (typeof xArr[i] === "number") {
    n = n + 1;
  }
  if (typeof xArr[i] === "boolean") {
    b += 1;
  }
}

console.log("string:", s);
console.log("number:", n);
console.log("boolean:", b);
