/*
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/
const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
const nuovoArray = [];

// forEach
myArray.forEach(function (element, index) {
  if (index >= 2 && index <= 4) {
    nuovoArray.push(element + " " + "index originale" + " " + index);
  }
});
console.table(nuovoArray);

// filter
const nuovoArray2 = myArray.filter(function (element, index) {
  if (index >= 2 && index <= 4) {
    return true;
  }
});
console.table(nuovoArray2);

// se volessimo stampare anche l'indice bisogna clonare con map l'array originale
/* const nuovoArrayFilter = myArray.filter(
  (guest, i) => i >= numMin && i <= numMax
);

console.log(nuovoArrayFilter);

const listaConIndici = myArray
  .map((guest, i) => ({ nome: guest, posizione: i }))
  .filter((guest, i) => i >= numMin && i <= numMax);

console.log(listaConIndici);

*/
