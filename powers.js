const handlerFunction = () => {
    document.getElementById('flight').classList.replace( "power-disabled", "power-enabled");
 }

document.querySelector("#activate-flight").addEventListener("click", handlerFunction);
document.querySelector("#activate-mindreading").addEventListener("click", handlerFunction);
document.querySelector("#activate-xray").addEventListener("click", handlerFunction);