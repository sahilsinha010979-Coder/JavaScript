// To implement some condition in the code.
// if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
// if-else statement
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
// else-if statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;// If isMember is true, discount will be 0.1 (10%), otherwise it will be 0 (no discount).