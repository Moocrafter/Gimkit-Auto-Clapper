var clapping = true;
var timer;
var clapper = document.querySelector("#content DIV .sc-gyfYDX.cuxPcJ .sc-jZIEzD.eiBiTJ .sc-bRbqnn.fPQnYY DIV .sc-beKmYL.bEOmlE.fade-router-enter-done .sc-ilGAqu.frbouh.animated.zoomInDown .sc-fXchrD.jghgOw .sc-NOpvV.hFqjJJ DIV");

var btn = document.createElement("BUTTON");
btn.innerHTML = "Stop";
btn.addEventListener("click", toggleClapingState());
//btn.id = "ToggleClap"; //For Debug Use
btn.style = "position: absolute;top: 0;z-index: 1000;"
document.body.appendChild(btn);

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
