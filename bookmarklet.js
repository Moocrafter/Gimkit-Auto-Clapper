var clapping = true;
var foo = setInterval(function() {document.querySelector("#content DIV .sc-gyfYDX.cuxPcJ .sc-jZIEzD.eiBiTJ .sc-bRbqnn.fPQnYY DIV .sc-beKmYL.bEOmlE.fade-router-enter-done .sc-ilGAqu.frbouh.animated.zoomInDown .sc-fXchrD.jghgOw .sc-NOpvV.hFqjJJ DIV").click()}, 1)

var btn = document.createElement("BUTTON");
btn.innerHTML = "Stop";
btn.addEventListener("click", function() {toggleClapingState()});
btn.id = "ToggleClap";
btn.style = "position: absolute;top: 0;z-index: 1000;"
document.body.appendChild(btn);

const toggleClapingState = function() {
    if (clapping) {
        btn.innerHTML = "Continue";
        clearInterval(foo);
    }else if (!clapping) {
        btn.innerHTML = "Stop";
        foo = setInterval(function() {document.querySelector("#content DIV .sc-gyfYDX.cuxPcJ .sc-jZIEzD.eiBiTJ .sc-bRbqnn.fPQnYY DIV .sc-beKmYL.bEOmlE.fade-router-enter-done .sc-ilGAqu.frbouh.animated.zoomInDown .sc-fXchrD.jghgOw .sc-NOpvV.hFqjJJ DIV").click()}, 1)
    }

    clapping = !clapping;
}
