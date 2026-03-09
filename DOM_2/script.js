// to get the attribute of a tag
let div = document.querySelector("div");
console.log(div);
console.log(div.getAttribute("id"));

let p = document.querySelector("p");
console.log(p.getAttribute("class"));

// To change the attributes
let head = document.querySelector("h1");
console.log(head);
head.setAttribute("id", "heading"); // The attribute is changed from header to heading.
console.log(head.getAttribute("id"));
// To manipulate the style pf a tag
div.style.backgroundColor = "green";
div.style.fontSize = "30px"

// Inserting new elements
let newbtn = document.createElement("button"); // Create a new element
newbtn.innerText = "Click me";
console.log(newbtn);
// to insert a new element, We have 4 ways
div.append(newbtn); // adds at the end of the node(inside).
div.prepend(newbtn);// adds at the start of the node(inside).
p.before(newbtn); // adds at the start of the node(outside).
p.after(newbtn); // adds at the end of the node(outside).

// to delete a node
head.remove(); // removes the node from the DOM