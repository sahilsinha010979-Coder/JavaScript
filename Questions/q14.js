// Use the reduce method to calculate the product of all elements in the array.
const numbers = [1, 2, 3, 4, 5];
let product = numbers.reduce((product, value)=>{
    return product * value
})
console.log(product)