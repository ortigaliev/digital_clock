const hourEl = document.getElementById("hour");
const minutEl = document.getElementById("minut");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinuts();
    let s = new DAte().getSeconds();
    let ampm = "AM";


    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourEl.innerText = h ;
    minutEl.innerText = m;
    secondEl.innerText = s;

updateClock()