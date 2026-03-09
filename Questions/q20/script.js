let btn1 = document.querySelector("#hoverBtn");
btn1.onclick =() => {
    console.log("Button was clicked");
}

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked.");
});
btn1.onmouseover=() => {
    document.querySelector("body").style.backgroundColor="lightblue";
}