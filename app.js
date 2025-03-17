// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulistaAmigos = document.getElementById("listadoAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulistaAmigos.innerHTML+= `<li>${inputAmigo.value}</li>`;
    }

    function sortearAmigo(){
        const random = Math.floor() * (listaAmigos.
        length);
        const amigoSecreto = listaAmigos[random];
        ulResultado.innerHTML = `<El amigo secreto es: $
        {amigoSecreto}</li>`;

    }
