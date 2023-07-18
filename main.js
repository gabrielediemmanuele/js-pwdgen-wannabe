const userName = prompt("Inserisci nome utente");
const userSurname = prompt("Inserisci il cognome");
const userAge = prompt("Inserisci la tua età");
const userColor = prompt("Inserisci il tuo colore");

const welcomeMessage = `
<h3>Benvenuto ${userName + userSurname + userAge + userColor}</h3>
`;

alert(welcomeMessage);

console.log(userName + userSurname + userAge + userColor);

document.getElementById("user-feedback").innerHTML = welcomeMessage;

//ESPERIMENTO

let userPresentAge = parseInt(prompt("Inserisci la tua età"));
let userBirthYear = parseInt(prompt("Inserisci anno di nascita"));

const currentYear = userPresentAge + userBirthYear;
alert("Il tuo anno corrente è:" + currentYear);
console.log("Il tuo anno corrente è:" + currentYear);
