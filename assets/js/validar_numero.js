function boton () {
    let numero_usuario = document.getElementById("numeroI").value
    let validacion = 0
    if ( numero_usuario % 2 == 0) {
        let par = document.getElementById("respuesta")
        par.innerHTML = "Este número" + validacion + "es par pariente"
        } else {
            alert ("No es numero par pariente")
        }
    }


function validarRadio() {
    let opcionesRadio = document.querySelector(`input[name="tipoDoc"]: checked`);

    if (opcionesRadio)

}