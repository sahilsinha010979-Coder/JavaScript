// function: Block of code that performs a specific task and can be invoked whenever needed.
// Example of a function in JavaScript:

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
let str = greet("Sahil"); // function calling
console.log(str);
// function for sum of two numbers
function sum(x, y){
    // Local variables -> scope
    console.log( x + y);
}
// arrow functions : Compact way of writing a Function
function sum(x, y){
    return x + y;
} // can be written as
const arrowsum = (a,b) => {
    return(a + b); // Arow functions are always stored in a variable
}
/* for each function, we can have parameters and arguments. 
Parameters are the variables that are defined in the function declaration, 
while arguments are the values that are passed to the function when it is called.*/
// for each loop in arrays
const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
    console.log(element); /* forEach is a built-in method in JavaScript that
    executes a provided function once for each array element.
    The forEach method takes a callback function as an argument
    and applies it to each element in the array.
    The callback function can take up to three arguments - the current element,
    the index of the current element, and the array itself. */
});
function printValue(val){
    console.log(val);
}
arr.forEach(printValue);
 /* for each takes the value of each element in the array 
and passes it to the printValue function.
functions can be passed as argument in javaScript.
Higher order functions are functions that can take other functions as arguments
or return functions as their result. */

// Some more array methods
// Map: Creates a new array with the result of some operation. the value its callback returns are used to form new array.
let newarray = arr.map((value) => { 
    return value*value;
}); // this will return a new array with the squares of the original array
console.log(newarray);
// Reduce: Reduces the array to a single value by applying a function to each element and accumulating the result.
let sumofarray = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // this will return the sum of all the elements in the array
console.log(sumofarray);
// Program to print the largest number in an array using reduce
let largest = arr.reduce((max, currentValue) => {
    return currentValue > max ? currentValue : max;
}, arr[0]); // this will return the largest number in the array
console.log(largest);