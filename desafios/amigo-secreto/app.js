// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(nombreAmigo)) {
        alert("Por favor, ingrese solo texto (no números o caracteres especiales).");
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.value = "";

    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

// Función para borrar todos los amigos
function borrarTodosLosAmigos() {
    amigos = [];

    actualizarListaAmigos();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
}