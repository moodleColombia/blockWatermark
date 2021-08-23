/** PANTALLA COMPLETA **/
function toggleFullScreen() {
    if (document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}



document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" || e.code === "Enter") {
        toggleFullScreen();
    }
}, false);

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" || e.code === "Escape") {
        console.log('bloqueo salida por tecla escape');
        e.preventDefault();
        return false;
    }
})

//fullscreenchange

console.count('infraction'); // anade conteo