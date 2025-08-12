// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 
//Funcion para agregar amigos
function agregarAmigo() {
//Toamr los datos del formulario
    let nombre = document.getElementById("amigo").value;
    //Validar que noe esté vacio
    if (nombre === "") {
        alert("Por favor ingresa un nombre");
        return;
    }
    //Agregar los nombres en el arreglo
    amigos.push(nombre);

    //limpiar formulario
    document.getElementById("amigo").value = "";
    console.log(amigos);
    //Llama a la funcion para actualizar la lista
    LeerAmigos();
}

function LeerAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpiar lista antes de agregar

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}