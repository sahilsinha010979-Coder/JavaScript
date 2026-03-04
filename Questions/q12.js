// Take a number n as input from user. Create an array of integers from 1 to n.
const n = parseInt(prompt("Enter a number: "));
const arr = [];
for(let i = 1; i <= n; i++){
    arr.push(i);
}
console.log("Array of integers from 1 to n: ", arr);