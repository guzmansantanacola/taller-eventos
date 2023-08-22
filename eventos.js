function saludarDesdeDiv() {
    alert("Hola! Soy el div");
}

const divElement = document.querySelector("div");
divElement.addEventListener("click", saludarDesdeDiv);