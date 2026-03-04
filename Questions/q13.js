// Use the reduce method to find the sum of all elements in an array of numbers.
const numbers = [1, 2, 3, 4, 5];
let sumofarray = numbers.reduce((sum, value)=>{
    return sum + value
});
console.log(sumofarray);