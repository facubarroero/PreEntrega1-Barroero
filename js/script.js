let continuar = true
let inicio = confirm("Bienvenid@, ¿querés saber el precio de tu propiedad?")

const mensajeInicio = 
    "¿Que tipo de propiedad desea tasar?: \n" +
    "A- 🏠Casa \n" +
    "B- 🏘️Departamento \n" +
    "C- 🏬Local \n" +
    "D- 🚜Terreno \n" 


function consulta(){
    while (inicio){
        tasacion()
        inicio = confirm("¿Querés tasar otra propiedad?")
    }
    alert("Gracias por utilizar nuestro servicio, hasta pronto 👋")
}

function tasacion(){
    let respuesta = prompt(mensajeInicio).toLowerCase().trim()
    if (respuesta !== "a" && respuesta !== "b" && respuesta !== "c" && respuesta !== "d"){
        alert("La respuesta no es válida, intentá nuevamente")
        tasacion()
    }else{
        let metrosCuadrados = parseFloat(prompt("¿Cuantos metros cuadrados tiene?"))
        while(isNaN(metrosCuadrados)){
            metrosCuadrados = prompt("Ingrese un número válido")
        }
        switch(respuesta){
            case "a":
                alert("Tu casa esta tasada en USD" + metrosCuadrados*1200)
                break
            case "b":
                alert("Tu departamento esta tasado en USD" + metrosCuadrados*800)
                break
            case "c":
                alert("Tu local esta tasado en USD" + metrosCuadrados*500)
                break
            case "d":
                alert("Tu terreno esta tasado en USD" + metrosCuadrados*200)
                break  
            default:
                console.error("La respuesta no es válida")
        }
    }

}
consulta()