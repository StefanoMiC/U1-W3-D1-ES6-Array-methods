const animals = ["cat", "dog", "mouse", "rabbit", "horse", "pig", "duck"];

// copy&reverse
const animalsCopy = [...animals];
animalsCopy.reverse();

console.log(animals);
console.log(animalsCopy);

// .forEach() - return value: no return

// for (let i = 0; i < animals.length; i++) {
//   const animal = animals[i];
//   console.log(animal);
// }

// animals.forEach(function (animal) {
//   console.log(animal);
// });

animals.forEach(animal => {
  console.log("ANIMAL", animal);
});

// .map() - return value: nuovo array con STESSO NUMERO DI ELEMENTI (modificati)
const mappedAnimals = animals.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(mappedAnimals);
// .filter() - si aspetta una funzione che ritorni true/false. return value: nuovo array con elementi FILTRATI
const filteredAnimals = animals.filter(animal => animal.length > 3);
console.log(filteredAnimals);
