function saludarDesdeDiv() {
    alert("Hola! Soy el div");
}

const divElement = document.getElementById("btn");
divElement.addEventListener("click", saludarDesdeDiv); 


const botonElement = document.getElementById("saludarBtn");
botonElement.onclick = function(event) {
    alert("Hola!");
    event.stopPropagation();
};