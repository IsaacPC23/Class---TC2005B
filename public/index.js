const btnDaleClick = document.getElementById("btn_js")
const btnLimpiar = document.getElementById("btn_limpiar")
const btnMostrar = document.getElementById("btn_mostrar")
const username = document.getElementById("exampleFormControlInput1")
const password = document.getElementById("inputPassword5")

btnDaleClick.addEventListener("click", evento)

function evento() {
    console.log(username.value)
    console.log(password.value)

    if (username.value == "admin@tec.mx" && password.value == "Admin1234") {
        alert("Bienvenido " + username.value)

    } else {
        alert("Usuario o contraseña incorrectos")
        console.log("error al iniciar sesion")
    }
}

btnLimpiar.addEventListener("click", limpiar)

function limpiar() {
    username.value = ""
    password.value = ""
    console.log("formulario limpiado")
}

btnMostrar.addEventListener("click", mostrarPassword)

function mostrarPassword() {
    if (password.type == "password") {
        password.type = "text"
        btnMostrar.textContent = "Ocultar"
    } else {
        password.type = "password"
        btnMostrar.textContent = "Mostrar"
    }
}