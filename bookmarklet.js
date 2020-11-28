var clapping = true;
var clapper = document.querySelector("#content DIV .sc-gyfYDX.cuxPcJ .sc-jZIEzD.eiBiTJ .sc-bRbqnn.fPQnYY DIV .sc-beKmYL.bEOmlE.fade-router-enter-done .sc-ilGAqu.frbouh.animated.zoomInDown .sc-fXchrD.jghgOw .sc-NOpvV.hFqjJJ DIV");
var timer = setInterval(function() {clapper.click()}, 1)

var btn = document.createElement("button");
btn.id = "ToggleClap";
btn.style = "position: absolute;top: 0;z-index: 1000;"
btn.innerHTML = "Stop";
btn.addEventListener("click", function() {
    if (clapping) {
        btn.innerHTML = "Continue";
        clearInterval(timer);
    }else if (!clapping) {
        btn.innerHTML = "Stop";
        timer = setInterval(function() {clapper.click()}, 1)
    }

    clapping = !clapping;
});
document.body.appendChild(btn);
