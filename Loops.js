// Loops are used to execute a block of code repeatedly until a specified condition is met. There are several types of loops in JavaScript, including:
// 1. For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration: " , i);
}
// Sum of first 5 natural numbers using for loop
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum of first 5 natural numbers:", sum);
//console.log("i =", i) This will cause an error because i was declared inside the block and doesn't exist outside the block
//2. While Loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration: ", j);
    j++;
}
// Sum of first 5 natural numbers using while loop
let sumWhile = 0;
let k = 1;
while (k <= 5) {
    sumWhile += k;
    k++;
}
console.log("Sum of first 5 natural numbers using while loop:", sumWhile);
//3. Do-While Loop
let m = 0;
do {
    console.log("Do-While Loop Iteration: ", m);
    m++;
} while (m < 5);
// Sum of first 5 natural numbers using do-while loop
let sumDoWhile = 0;
let n = 1;
do {
    sumDoWhile += n;
    n++;
} while (n <= 5);
console.log("Sum of first 5 natural numbers using do-while loop:", sumDoWhile);
//4. for...of Loop (used for iterating over iterable objects like arrays)
const array = [10, 20, 30, 40, 50];
for (const value of array) {
    console.log("for...of Loop Value: ", value);
}
let str = "Hello";
for(let i of str){
    console.log("for...of Loop Character: ", i);
}
//5. for...in Loop (used for iterating over the properties of an object)
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    console.log("for...in Loop Key: ", key, "Value: ", obj[key]);
}