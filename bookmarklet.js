var clapping = true;
var timer;
var clapper = document.querySelector("div.sc-NOpvV.hFqjJJ > div > div > div.animated.pulse.infinite");

const toggleClapingState = function() {
    if (clapping) {
        btn.innerHTML = "Start Clapping";
        clearInterval(timer);
    }else if (!clapping) {
        btn.innerHTML = "Stop Clapping";
        timer = setInterval(function() {clapper.click()}, 1)
    }

    clapping = !clapping;
}

var btn = document.createElement("BUTTON");
btn.innerHTML = "Stop Clapping";
btn.addEventListener("click", toggleClapingState);
//btn.id = "ToggleClap"; //For Debug Use
btn.style = "position: absolute;top: 0;z-index: 1000;"
document.body.appendChild(btn);
setInterval(function() {clapper.click()}, 1)
