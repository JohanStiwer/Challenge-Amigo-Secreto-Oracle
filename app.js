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

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear");
        return;
    }

    let asignaciones = {};
    let disponibles = [...amigos]; // Crear una copia del arreglo de amigos

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let index;

        do {
            index = Math.floor(Math.random() * disponibles.length);
        } while (disponibles[index] === amigo && disponibles.length > 1);

        asignaciones[amigo] = disponibles[index];
        disponibles.splice(index, 1); // Remover el amigo asignado de la lista disponible
    }

    // Mostrar resultados
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = "<h3>Resultados del Sorteo:</h3>";
    for (let amigo in asignaciones) {
        resultados.innerHTML += "<p>" + amigo + " le regala a " + asignaciones[amigo] + "</p>";
    }
}