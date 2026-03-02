console.log("Hello, World!");// Printing a message to the console
console.log("Sahil");
let price = 100;
let discount = 20;
let finalPrice = price - discount;
console.log("Final Price: " + finalPrice);
var age = 25; // Global variable. Can be redeclared and updated.
let name = "Sahil"; // Block-scoped variable. Cannot be redeclared but can be updated.
const PI = 3.14; // Block-scoped constant. Cannot be redeclared or updated.
let a; // Declaring a variable without initializing it. It will have the value 'undefined'.
console.log(a);
var b; // Declaring a variable without initializing it. It will also have the value 'undefined'.
console.log(b);
//const c; This will throw an error because constants must be initialized at the time of declaration.
{
    let name = "John"; // This 'name' variable is scoped to this block and does not affect the outer 'name' variable.
    console.log("Inside block: " + name); // Output: John
}
console.log("Outside block: " + name); // Output: Sahil
// Data types in JavaScript
let str = "Hello"; // String
let num = 42; // Number
let bool = true; // Boolean 
let obj = { name: "Sahil", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let undef; // Undefined
let nul = null; // Null
console.log(typeof str); // Output: string
console.log(typeof num); // Output: number
console.log(typeof bool); // Output: boolean    
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object (arrays are a type of object in JavaScript)
console.log(typeof undef); // Output: undefined
console.log(typeof nul); // Output: object (this is a quirk in JavaScript, null is considered an object)
let student = {
    fullName: "Sahil Kumar",
    age: 25,
    cgpa: 3.8,
    isEnrolled: true,
};
console.log(student); // Output: { fullName: 'Sahil Kumar', age: 25, cgpa: 3.8, isEnrolled: true }
console.log(student["fullName"]); // Output: Sahil Kumar
console.log(student.fullName); // Output: Sahil Kumar
console.log(student.age); // Output: 25
console.log(student.isEnrolled); // Output: true
student.age = 26; // Updating the age property
console.log(student.age); // Output: 26