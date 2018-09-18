document.querySelector("#activate-flight").addEventListener('click', handlerFunction);

function handlerFunction (event) {
    document.getElementById("flight").classList.toggle("power-enabled");
}