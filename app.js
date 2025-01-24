// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosArray = [];

function agregarAmigo() {
  ubicacionAmigo = document.getElementById("amigo");
  let amigo = ubicacionAmigo.value.toString();
  if (!amigo || amigo.trim() === "") {
    alert("Porfavor inserte un nombre");
  } else if (amigosArray.includes(amigo)) {
    alert("Porfavor no ingrese duplicados");
    ubicacionAmigo.value = "";
  } else {
    amigosArray.push(amigo);
    agregarLista();
    ubicacionAmigo.value = "";
  }
}

function agregarLista() {
  ubicacionLista = document.getElementById("listaAmigos");
  ubicacionLista.innerHTML = "";
  for (let i = 0; i < amigosArray.length; i++) {
    ubicacionLista.innerHTML += `<li><p>${amigosArray[i].toString()}</p></li>`;
  }
}

function sortearAmigo() {
  const ubicacionResultado = document.getElementById("resultado");
  if (amigosArray.length != 0) {
    let indiceAleatorio = Math.floor(Math.random() * amigosArray.length);
    let amigoSorteado = amigosArray[indiceAleatorio].toString();
    ubicacionResultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
    amigosArray = [];
    agregarLista();
  } else {
    ubicacionResultado.innerHTML = `Porfavor registre a un amigo`;
  }
}
