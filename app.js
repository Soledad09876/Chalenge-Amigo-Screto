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
    
    // Obtiene el elemento de la lista en el HTML y lo actualiza
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    // Convierte los nombres almacenados en el array en una lista HTML
    lista.innerHTML = "<li>" + amigos.join("</li><li>") + "</li>";
    
    // Limpia el input después de agregar un nombre
    input.value = "";
}

// Esta función es para sortear un amigo de la lista
// Y se asegura de que no se repitan nombres hasta que todos hayan sido sorteados
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
//FIN