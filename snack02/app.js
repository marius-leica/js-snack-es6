/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
];

//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.

for (let i = 0; i < squadre.length; i++) {
  const puntiFatti = Math.floor(Math.random() * 100);
  const falliSubiti = Math.floor(Math.random() * 100);
  squadre[i].puntiFatti = puntiFatti;
  squadre[i].falliSubiti = falliSubiti;
}
console.table(squadre);

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

for (let i = 0; i < squadre.length; i++) {
  const { nome, falliSubiti } = squadre[i];
  console.log(nome, falliSubiti);
}
