// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
function agregarAmigo(){
    let inputAmigos = document.getElementById("amigo");
    let amigo = inputAmigos.value;
    console.log(amigo);

    if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
    }
    
    amigos.push(amigo);
    console.log(amigos);
}