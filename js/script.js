// Parte interna
const animales = [
    { nombre: "gato", pista: "Es una mascota que maúlla y ama las cajas" },
    { nombre: "perro", pista: "Es conocido como el mejor amigo del hombre." },
    { nombre: "conejo", pista: "Tiene largas orejas y le gusta comer zanahorias." },
];
const animalSecreto = animales[Math.floor(Math.random() * animales.length)];
let adivinado = false;

// Interacción con el usuario
alert("Adivina el animal. Acá tienes una pista:");
alert(animalSecreto.pista);

while (!adivinado) {
    let respuesta = prompt("¿Cuál es el animal?");

    if (respuesta === animalSecreto.nombre) {
        alert("¡Felicitaciones, adivinaste!");
        adivinado = true;
    } else {
        alert("No es correcto, intenta de nuevo.");
    }
}
