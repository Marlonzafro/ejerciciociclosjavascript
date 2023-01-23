let valorMoto = 15000000

function agregar_quitar_producto (accion) {
    let cantidadActual = document.getElementById("cantidad_1f")
    if (accion == `agregar_producto`) {
        cantidadActual.value = parseint(cantidadActual.value) + 1
    } else {
        if (cantidadActual.value == 1) {
            cantidadActual.value = cantidadActual.value -1
        }
    }

}


function agregar (){
    cantidadActual.value= parseint(cantidadActual.value) + 1
    setTimeout () {
        valorMoto = valorMoto*document.getElementById("cantidad_2f")
    let cvalculoValorMoto = valorMoto * parseInt(document.getElementById("cantidad_2f").value)
    document.getElementById(`valor_2f`).innerHTML = calculoValorMoto

    
    }, 300);

    }
    
function quitar (){
    let cantidadActual = document.getElementById("cantidad_2f")
    if(cantidadActual.value == 1){
        alert("no se pueden quitar más productos")
    }else{
        candirdadActual.value = cantidadActual.value - 1
    }
    
    
    

}

