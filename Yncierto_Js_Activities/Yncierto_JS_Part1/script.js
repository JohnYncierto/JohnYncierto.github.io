const countButton = document.getElementById("btnCount");
const counter = document.getElementById("txtCounter");

let count = 0;

countButton.addEventListener("click",() => {
    console.log(counter.innerHTML)
    count++;
    counter.textContent=count;
    console.log("clicked");
});