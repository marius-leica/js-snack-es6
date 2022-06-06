/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bici = [
  { nome: "SAVADECK Warwind5.0", peso: 10 },
  { nome: "SAVADECK Phantom3.0", peso: 7 },
  { nome: "SHOCKBLAZE BK11SB4041", peso: 9 },
  { nome: "TREK Emonda SL 5", peso: 8 },
  { nome: "Helliot Bikes Sport 02", peso: 14 },
];

console.table(bici);

const title = document.getElementById("title");
const wheight = document.getElementById("wheight");

const { nome, peso } = bici[0];
let biciPiuLeggera = { nome, peso, indice: 0 };
console.log(biciPiuLeggera);

for (let i = 1; i < bici.length; i++) {
  const { peso, nome } = bici[i];

  if (peso < biciPiuLeggera.peso) {
    biciPiuLeggera = { nome, peso, indice: i };
  }
}

//stampa
title.innerHTML = `Bici piu' leggera: ${biciPiuLeggera.nome}`;
wheight.innerHTML = `Peso: ${biciPiuLeggera.peso} kg.`;
