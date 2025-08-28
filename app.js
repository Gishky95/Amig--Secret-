// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let personas = [];

function agregarPersona() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  
  if (nombre) {
    personas.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    document.getElementById("lista").appendChild(li);
    
    input.value = "";
  }
}

function sortear() {
  if (personas.length === 0) {
    alert("No hay personas en la lista.");
    return;
  }
  
  const indice = Math.floor(Math.random() * personas.length);
  const ganador = personas[indice];
  
  document.getElementById("ganador").textContent = "🎉 El ganador es: " + ganador;
}

