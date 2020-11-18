// Chiedere all'utente il cognome
var userName = prompt('Inserisci il tuo cognome');

//console.log(userName);

// Inserirlo in un array con altri cognomi:
var names = ['Bianchi', 'Rossi', 'Ibrahimovic', 'Conte', 'Salvini'];

names.push(userName);

// Stampa la lista ordinata alfabeticamente
names.sort();

for (var i = 0; i < names.length; i++) {
  var name = names[i];
  var listContent = document.getElementById('alfa_list').innerHTML;
  document.getElementById('alfa_list').innerHTML = listContent + '<li>' + name + '</li>';
}

// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var userposition = document.getElementById('position').innerHTML = 'Sei al numero ' + (names.indexOf(userName) + 1) + ' della lista';
