// Operators in javascript
// 1. Arithmetic Operators
let x = 10;
let y = 5;
console.log("Addition: " ,(x + y)); // Output: 15
console.log("Subtraction: " ,(x - y)); // Output: 5
console.log("Multiplication: " ,(x * y)); // Output: 50
console.log("Division: " ,(x / y)); // Output: 2
console.log("Modulus: " ,(x % y)); // Output: 0
console.log("Exponentiation: " ,(x ** y)); // Output: 100000
// unary operators
let a = 5;
console.log("Unary plus: " ,(+a)); // Output: 5
console.log("Unary minus: " , (-a)); // Output: -5
console.log("Increment: " , (a++)); // Output: 5 (returns the value before incrementing)
console.log("After Increment: " , a); // Output: 6
console.log("Decrement: " , (a--)); // Output: 6 (returns the value before decrementing)
console.log("After Decrement: " , a); // Output: 5
//2. Assignment Operators
let b = 10;
b +=5; // equivalent to b = b+5
console.log("After += : " , b); // Output: 15
b -=3; // equivalent to b = b-3
console.log("After -= : " , b); // Output: 12
b *=2; // equivalent to b = b*2
console.log("After *= : " , b); // Output: 24
b /=4; // equivalent to b = b/4
console.log("After /= : " , b); // Output: 6
b %=5; // equivalent to b = b%5
console.log("After %= : " , b); // Output: 1
b **=3; // equivalent to b = b**3
console.log("After **= : " , b); // Output: 1
//3. Comparison Operators
let c = 10;
let d = 20;
let e = "10";
console.log("Equal to: " , (c == d));// Output: false
console.log("Not equal to: " , (c != d));// Output: true
console.log("equal to", (c == e)); // Output: true (loose equality, compares values after type coercion)
console.log("strict equal to: " , (c === e)); // Output: false (strict equality, compares both value and type)
console.log("Not strict equal to: " , (c !== e)); // Output: true (not strict equal, compares both value and type)
console.log("Greater than: " , (c > d)); // Output: false
console.log("Less than: " , (c < d)); // Output: true
console.log("Greater than or equal to: " , (c >= d)); // Output: false
console.log("Less than or equal to: " , (c <= d)); // Output: true
//4. Logical Operators
let f = true;
let g = false;
console.log("Logical AND: " , (f && g)); // Output: false
console.log("Logical OR: " , (f || g)); // Output: true
console.log("Logical NOT: " , (!f)); // Output: false