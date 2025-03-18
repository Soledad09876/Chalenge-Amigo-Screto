// Primero, declarar variables con Arrays vacíos [], Este es una estructura de datos que permite almacenar
// múltiples valores en una sola variable.
// Esto se declara solo una vez en todo el código y al llamarla se usa esta variable y la función
//  que tiene asignada.
let amigos = [];
let amigosSorteados = [];

// Esta función es para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");// Esta funcion obtiene el valor del input y se almacena 
    // en una constante.
    const nombre = input.value.trim();// La función trim() elimina los espacios en blanco antes y después del 
    // texto ingresado.
    const nombreLower = nombre.toLowerCase();// Luego, esta funsion se convierte a minúsculas para evitar 
    // nombres duplicados con mayúsculas.

    // Esta condicion verifica si el nombre ingresado está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Esta variable y condicion permite verificar si el nombre ya existe en la lista sin diferenciar entre 
    // mayúsculas y minúsculas
    let repetido = false;
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].toLowerCase() === nombreLower) {
            repetido = true;
            break;
        }
    }
    
    // Si el nombre ya existe, muestra una alerta y no lo agrega
    if (repetido) {
        alert("Este nombre ya está en la lista. Ingresa un nombre diferente.");
        return;
    }
    
    // Agrega el nombre al array amigos
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]} <button onclick="eliminarAmigo(${i})">❌</button></li>`;
    }
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(indice) {
    amigos.splice(indice, 1); // Elimina el amigo en la posición dada
    actualizarLista(); // Refresca la lista en pantalla
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    amigosSorteados = [];
    actualizarLista();
    alert("Se ha reiniciado el juego. Puedes comenzar de nuevo.");
}

// Función para sortear un amigo de la lista
// Se asegura de que no se repitan nombres hasta que todos hayan sido sorteados
function sortearAmigo() {
    // Verifica que haya al menos dos nombres en la lista antes de sortear
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos nombres para hacer el sorteo.");
        return;
    }
    
    // Si todos los nombres han sido sorteados, se reinicia la lista
    if (amigosSorteados.length === amigos.length) {
        amigosSorteados = [];
        alert("Se han sorteado todos los amigos. Reiniciando sorteo.");
    }
    
    let amigoSorteado;
    let indiceSorteado;
    do {
        // Genera un índice aleatorio dentro del rango del array amigos
        indiceSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceSorteado];
    } while (amigosSorteados.includes(amigoSorteado)); // Repite si el nombre ya fue sorteado
    
    // Agrega el nombre sorteado a la lista de sorteados
    amigosSorteados.push(amigoSorteado);
    
    // Muestra el nombre sorteado en una alerta
    alert("El amigo sorteado es: " + amigoSorteado);
}
