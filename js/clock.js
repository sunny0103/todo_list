const clock = document.querySelector("h2#clock")
// const HIDDEN_CLASSNAME = "hidden";

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0"); 
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.classList.remove(HIDDEN_CLASSNAME);
}

getClock(); 
setInterval(getClock, 1000);

