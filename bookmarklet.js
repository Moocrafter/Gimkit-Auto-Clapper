var clapping = false;
var timer;
var clapper = document.querySelector(".sc-dmejso.blBwFD");

var btn = document.createElement("BUTTON");
btn.innerHTML = "Start Clapping";
btn.onclick = toggleClapingState;
//btn.id = "ToggleClap"; //For Debug Use
btn.style = "position: absolute;top: 0;z-index: 1000;"
document.body.appendChild(btn);

function toggleClapingState() {
    if (clapping) {
        btn.innerHTML = "Start Clapping";
        clearInterval(timer);
    }else if (!clapping) {
        btn.innerHTML = "Stop Clapping";
        timer = setInterval(function() {clapper.click()}, 1)
    }

    clapping = !clapping;
}
