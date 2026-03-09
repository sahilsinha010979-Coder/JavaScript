// When a web page is loaded, the browser creates a Document Object Model of the page. 
// The DOM is a tree-like structure that represents the elements of the page as objects.
// JavaScript can be used to manipulate the DOM, allowing you to change the content and structure of a web page dynamically.
console.log(window.document.body.childNodes[1])
console.dir(window.document.body)
//DOM Manipulation
//1.Selecting with ID
console.dir(document.getElementById("heading"))

//2.Selecting with class
console.log(document.getElementsByClassName("div")) // returns a HTML collection

//Slecting with tag names
console.log(document.getElementsByTagName("div"))

// Query Selector
console.dir(document.querySelector("div"))// returns the first element matching with the tag or id or class
console.dir(document.querySelectorAll("div"))// returns all the elements matching with the tag or id or class

//Attributes
let div = document.querySelector("div");
console.log(div)
