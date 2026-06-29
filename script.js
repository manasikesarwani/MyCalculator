let display=document.getElementById("display");
display.innerText="";
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map(button=>{
    button.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case "C":
                display.innerText="";
                break;
            case "=":
                try{
                    display.innerText=eval(display.innerText);
                }catch{
                    display.innerText="Error";
                }
                break;
            case "←":
                display.innerText=display.innerText.slice(0,-1);
                break;
            default:
                display.innerText+=e.target.innerText;
        }
    });
});
document.addEventListener("mousemove", function(e){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "*";

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);

});
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = "AM";
    if (hours >= 12) {
        ampm = "PM";
    }
    if (hours > 12) {
        hours -= 12;
    }
    if (hours == 0) {
        hours = 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    document.getElementById("clock").innerText =
        `${hours}:${minutes} ${ampm}`;
    const options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    };
    document.getElementById("date").innerText =
        now.toLocaleDateString("en-GB", options);
}
updateTime();
setInterval(updateTime, 60000);

document.addEventListener("keydown", function(event){
    const key = event.key;
    if("0123456789+-*/.%".includes(key)){
        display.innerText += key;
    }
    else if(key === "Enter"){
        try{
            display.innerText = eval(display.innerText);
        }
        catch{
            display.innerText = "Error";
            shakeCalculator();
        }
    }
    else if(key === "Backspace"){
        display.innerText =
        display.innerText.slice(0,-1);
    }
    else if(key === "Escape"){
        display.innerText = "";
    }
});
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("darktheme");
    } else {
        document.body.classList.remove("darktheme");
    }
});