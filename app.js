// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value.trim();
    console.log(amigo);

     if (amigo === ""){
    alert("Por favor, escribe un nombre.")
                    }

    else {
    amigos.push(amigo);
    inputAmigo.value = "";
    actualizarLista();
      }
    }

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
    }

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un nombre.");
        return;
}
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        let resultado = amigos[indiceAleatorio];

        mostrarResultado(resultado);
    }


function mostrarResultado(resultado) {
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `
        <h2>¡Tu amigo secreto es:</h2>
        <p class="resultado-amigo">${resultado}!</p>
    `
}