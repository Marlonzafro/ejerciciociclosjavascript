

function sumatoria() {
    let valorUsuario = document.getElementById("sumatoria_usuario").value
    let resultado = 0
    for (let suma = 0; suma <= valorUsuario; suma++) {
        resultado = suma + resultado
        console.log(resultado)
    }
    document.getElementById("resultado").innerText = resultado
}


//ejercicio 1

function boton() {
    let numero_usuario = document.getElementById("numeroI").value
    let validacion = 0
    if (numero_usuario % 2 == 0) {
        let par = document.getElementById("respuesta")
        par.innerHTML = "Este número" + validacion + "es par pariente"
    } else {
        alert("No es numero par pariente")
    }
}

//ejercicio 3



//ejercico 3 tutoria




function validar() {
    let genero = document.getElementById(`generoUsiario`);
    let edad = document.getElementById(`edadUsiario`);
    let error = document.getElementById(`error`);
    error.style.color = `red`;
    console.log("enviando formlario");

    let mensajesError = [];

    if (genero.value === ``) {
        mensajesError.push(`Especifica tu genero`);

    }
    if (edad.value === null || edad.value === ``) {
        mensajesError.push(`Especifica tu edad`);

    }

    if (edad.value <= 10 || edad.value >= 18) {

        if (mensajesError.length == 0) {
            error.innerHTML = ""
            if (genero.value == "hombre") {
                if (edad.value <= 10) {
                    alert("Reclama un jugo y una porción de pizza tres carnes   sin costo")
                }

            }
        } else {
            error.innerHTML = mensajesError.join(`,`);

        }

        if (mensajesError.length == 0) {
            error.innerHTML = ""
            if (genero.value == "mujer") {
                if (edad.value <= 10) {
                    alert("Reclama un jugo y pizza hawaiana sin costo.")
                }

            }
        } else {
            error.innerHTML = mensajesError.join(`,`);

        }

        if (mensajesError.length == 0) {
            error.innerHTML = ""
            if (genero.value == "mujer") {
                if (edad.value >= 18) {
                    alert("Reclame una cerveza gratis y una porción de pizza Hawaiana.")
                }

            }

        }

        if (mensajesError.length == 0) {
            error.innerHTML = ""
            if (genero.value == "hombre") {
                if (edad.value >= 18) {
                    alert("Reclame una cerveza gratis y una porción de pizza tres carnes.")
                }

            }

        }
    } else {
        alert("suerte para la proxima")
    }

}




