

const handlerFunction = () => {
    const toggler = document.getElementsByClassName("power disabled");
    console.log('comment', toggler);
    document.getElementById('flight').classList.toggle("enabled");
 }


document.querySelector("#activate-flight").addEventListener("click", handlerFunction);
