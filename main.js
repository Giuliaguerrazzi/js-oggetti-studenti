// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.

var studentGiulia = {
  nome: 'Giulia',
  cognome: 'Guerrazzi',
  età: 30,
}

for (var key in studentGiulia) {
console.log(studentGiulia[key]);
}

var studentSara = {
  nome: 'Sara',
  cognome: 'Rossi',
  età: 20,
}

var studentGianluca = {
  nome: 'Gianluca',
  cognome: 'Cioni',
  età: 25,
}

var studentChiara = {
  nome: 'Chiara',
  cognome: 'Cipriani',
  età: 28,
}

var classe = [
  {
    nome: 'Sara',
    cognome: 'Rossi',
    età: 20,
  },
  {
    nome: 'Gianluca',
    cognome: 'Cioni',
    età: 25,
  },
  {
    nome: 'Chiara',
    cognome: 'Cipriani',
    età: 28,
  },
]

for (var i = 0; i < classe.length; i++) {
  console.log(classe[i]);
  console.log(classe[i]['nome']);
  console.log(classe[i]['cognome']);
  }

var newStudent = {
  nome: '',
  cognome: '',
  eta: '',
}

var studentName = prompt('Inserisci il tuo nome').trim();
var studentCognome = prompt('Inserisci il tuo cognome').trim();
var studentEta = parseInt( prompt('Inserisci la tua età'));

for (var key in newStudent) {
  if (key === 'nome') {
    newStudent.nome = studentName;
    console.log(newStudent[key]);
  }
  else if (key === 'cognome') {
    newStudent.cognome = studentCognome;
    console.log(newStudent[key]);
  }
  else if (key === 'eta') {
    newStudent.eta = studentEta;
    console.log(newStudent[key]);
  }
}

classe.push(newStudent);
console.log(classe);
