let numbers = [3, 7, 2, 8, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
}

console.log("Sum of numbers: " + sum);







function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two numbers.";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

