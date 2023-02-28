/*
Consegna:
Dato un array contenente una lista di cinque immagini,
creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico:
costruiamo il container e inseriamo un'immagine grande al centro:
avremo così la struttura base e gli stili
pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo
tutte le immagini dinamicamente servendoci dell'array
fornito e un semplice ciclo for che concatena
un template literal (ad esempio).
Al termine di questa fase ci ritroveremo con lo stesso slider
stilato nella milestone 1, ma costruito
dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
che quindi verrà visualizzata al posto della precedente.
*/



// Creo un array di immagini
const images = ["img/01.webp", "img/02.webp", "img/03.webp" , "img/04.webp" , "img/05.webp"];

// Creo variabili per bersagliare elementi html
const upArrowEl = document.getElementById("upArrow");
const downArrowEl = document.getElementById("downArrow");
const activeImgEl = document.getElementById("carouselActiveImg");

// Creo una variabile di indice
let index = 0;

// Faccio in modo che all'apertura della pagina web sia visualizzata la prima immagine dell'array
activeImgEl.src = images[index];

