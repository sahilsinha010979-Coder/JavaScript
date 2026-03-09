let mode = document.querySelector("#mode");
let currmode = "Light";
mode.addEventListener("click", () => {
    if(currmode ==="Light"){
        currmode = "Dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode = "Light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(`Current mode is ${currmode}`);
})