console.log('Hello World!');

// $ Gioco dei dadi

// $ Genero un numero random da 1 a 6 per il giocatore
const userRandomSixDiceResult = (Math.floor((Math.random() * 6) + 1));
console.log('Il risultato del tuo tiro è:' + userRandomSixDiceResult)

// $ Genero un numero random da 1 a 6 per il computer
const computerRandomSixDiceResult = (Math.floor((Math.random() * 6) + 1));
console.log('Il risultato del tiro del computer è:' + computerRandomSixDiceResult)

// $ Stabilisco il vincitore in base al relativo numero maggiore
if (userRandomSixDiceResult > computerRandomSixDiceResult) {
    console.log('Complimenti!!! Hai Vinto!!!')
}
else if (userRandomSixDiceResult < computerRandomSixDiceResult) {
    console.log('Ritenta, sarai più fortunato.')
}
else if (userRandomSixDiceResult === computerRandomSixDiceResult) {
    console.log('Giochiamo ancora?')
}

// % Mail
    // % creo un array di email
const emailList = [
    'pinco@pallo.it',
    'riccardo@boolean.it',
    'luigi@boolean.it',
    'stefano@boolean.it',
    'donato@boolean.it',
    'giada@boolean.it',
    'alberto.voxpopuli@boolean.it',
];
// % Chiedo all'utente di inserire la sua e-mail in un input
const userEmail = document.getElementById(userInputEmail);

// % Verifico che l'e-mail inserita faccia parte della lista
const loginCheckButton = document.getElementById(loginCheckButton);
loginCheckButton.addEventListener ('click', function() {
    
})

// % Stampo messaggio di accesso, consentito o negato in base ai casi

