
/*-------------------Alternar entre imágenes----------------------*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

/*-------------------Mensaje de bienvenida------------------------*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/*Función para setear el nombre del usuario*/
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
    localStorage.clear(); //borrar el localstorage
}


/*Comprobar el nombre del usuario con una condición*/
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

/*manejar el evento cuando se hace clic en el botón*/
myButton.onclick = () => {
    setUserName();
};
