// The change in the state of an object is called an event.
//Events are fired to notify code of "interesting Changes" that may effect code execution.
/*Mouse click
keyboard events
form events
print events and many more*/
// Inline javascript can cause the Html code to be very lengthy.
let box = document.querySelector("#container");
box.onmouseover = () => {
    console.log("You are inside div");
}
let btn1 = document.querySelector("#btn1");
btn1.onclick =() => {
    console.log("Button was clicked");
}
// The priority of external JavaScript is higher than inline JavaScript.

// Event Object: It is a special object that has details about the event.
// All evnet handlers have access to the event object's properties and methods.
// It is denoted by "e" or "event" in the event handler function.

let container = document.querySelector("#container2");
container.onclick =(e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}

// Event Listeners
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
    console.log("btn2 was clicked.")
});
btn2.addEventListener("mouseover",()=>{
    console.log("Mouse is over btn2");
});
// To rmeove an event listener, we need to define the function separately and then pass it to both addEventListener and removeEventListener.
const handler = () => {
    console.log("btn2 was clicked.");
}
btn2.removeEventListener("click",handler);