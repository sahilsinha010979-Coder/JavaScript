// Arrays: collection of items.
let array = [1,2,3,4,5];
console.log(array);
let names = ["Alice", "Bob", "Charlie"];
console.log(names);
let mixed = [1, "Hello", true, null];
console.log(mixed);
console.log(array[0]); // Output: 1
console.log(names[1]); // Output: Bob
console.log(typeof array); // Output: object (arrays are a type of object in JavaScript)
console.log(array.length); // Output: 5
console.log(names.length); // Output: 3
console.log(mixed.length); // Output: 4
array[3] = 10; // Updating the value at index 3
console.log(array);
// looping over an array
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
// array methods
names.push("David"); // Adds an element to the end of the array
console.log(names);
names.pop(); // Removes the last element from the array and returns it
console.log(names);
names.unshift("Eve"); // Adds an element to the beginning of the array
console.log(names);
names.shift(); // Removes the first element from the array
console.log(names);
let index = names.indexOf("Charlie"); // Finds the index of the first occurrence of "Charlie"
console.log(index);
console.log(names.toString()); // Converts the array to a string
array.concat([6,7,8], names); // Concatenates the array with another array
console.log(array);
array.slice(1, 4); // Returns a shallow copy of a portion of the array into a new array object
console.log(array);
array.splice(2, 1); // Removes 1 element at index 2
console.log(array);