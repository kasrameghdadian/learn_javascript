/*
1. Sum of Numbers in an Array
Problem: Write a program that calculates the sum of all numbers in a given array.
*/

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("sum ---->", sum);
