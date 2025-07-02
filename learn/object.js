//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.



function invert(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(-array[i]);
  }
  return result;
}



//2.I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let total = 0;

for (let i = 0; i < array1.length; i++) {
  total = total + array1[i];
}

for (let i = 0; i < array2.length; i++) {
  total = total + array2[i];
}

console.log(total); 



//3.You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

//As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

let n = 6; 
let result = [];

for (let i = 1; i <= n; i++) {
  result.push(i);
}

console.log(result); 



//4.Write a function to split a string and convert it into an array of words.