const userName = prompt("inserisci nome utente");
const userSurname = prompt("Inserisci il cognome");
const userAge = prompt("Inserisci la tua età");
const userColor = prompt("Inserisci il tuo colore");

const welcomeMessage = `
<h3>Benvenuto ${userName + userSurname + userAge + userColor}</h3>
`;

document.getElementById("user-feedback").innerHTML = welcomeMessage;
