// string is a sequence of characters used to represent text
// string can be created using single quotes, double quotes, or backticks
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let backtickString = `Hello, World!`;// above the tab key on the keyboard
// string can contain variables and expressions using template literals
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);
// string interpolation : embedding variables and expressions inside a string using template literals
// length of a string
console.log(singleQuoteString.length);
// accessing characters in a string
console.log(singleQuoteString[0]);
// \n is used to create a new line in a string
let multiLineString = "Hello,\nWorld!";
console.log(multiLineString);
// \t is used to create a tab space in a string
let tabbedString = "Hello,\tWorld!";
console.log(tabbedString);
console.log(tabbedString.length); // the length of the string includes the tab character as one character
// string methods: There are many built-in functions to manipulate a string.
let str = "Hello, World!";
let upperStr = str.toUpperCase(); // converts the string to uppercase
console.log(upperStr);
console.log(str); // the original string remains unchanged
let lowerStr = str.toLowerCase(); // converts the string to lowercase
console.log(lowerStr);
let trimmedStr = str.trim(); // removes whitespace from both ends of the string
console.log(trimmedStr);
let slicedStr = str.slice(0, 5); // extracts a portion of the string from index 0 to 5 (not including 5)
console.log(slicedStr);
let replacedStr = str.replace("World", "JavaScript"); // replaces "World" with "JavaScript"
console.log(replacedStr);
str[0] = "h"; // strings are immutable, so this will not change the original string
console.log(str); // Output: "Hello, World!"
let concatStr = str.concat(" How are you?"); // concatenates the string with another string
console.log(concatStr); // Output: "Hello, World! How are you?"
let splitStr = str.split(","); // splits the string into an array using the comma as a separator
console.log(splitStr);

