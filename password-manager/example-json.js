var person = {
  name: 'Chris',
  age: 24
};
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');

var animal = '{"name": "Halley"}';

// convert to js object

var animalObject = JSON.parse(animal);

animalObject.age = 4;

var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);

// add age prop

// convert back to JSON and print to screen
