// Handler functions for individual powers. 
handlerFunctionFlight = () => {
    document.getElementById('flight').classList.replace("power-disabled", "power-enabled")
};

handlerFunctionMindReading = () => {
    document.getElementById('mindreading').classList.replace("power-disabled", "power-enabled")
};

handlerFunctionXray =() => {
    document.getElementById('xray').classList.replace("power-disabled", "power-enabled")
};

// Handler Functions to enable/disable all powers. 
handlerFunctionActivateAll = () => {
    let powers = document.querySelectorAll('section');
    for (let index = 0; index < powers.length; index++) {
        powers[index].classList.replace("power-disabled", "power-enabled")
        }
};

handlerFunctionDeactivateAll = () => {
    let powers = document.querySelectorAll('section');
    for (let index = 0; index < powers.length; index++) {
        powers[index].classList.replace("power-enabled", "power-disabled")
    }
};

// Query selectors for individual powers/buttons
document.querySelector("#activate-flight").addEventListener("click", handlerFunctionFlight);
document.querySelector("#activate-mindreading").addEventListener("click", handlerFunctionMindReading);
document.querySelector("#activate-xray").addEventListener("click", handlerFunctionXray);

// Query selectors to enable/disable all powers
document.querySelector("#activate-all").addEventListener("click", handlerFunctionActivateAll);
document.querySelector("#deactivate-all").addEventListener("click", handlerFunctionDeactivateAll)