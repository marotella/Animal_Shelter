const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger){
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
    }
    greet(){
        console.log(`Hi! I'm ${this.name} the ${this.species}!`);
    }
    feed(){
        this.hunger = this.hunger - 20;
        console.log("Yum, I love food!");
    }
}

class Cat extends Animal{
    constructor(name, color, hunger){
        super(name, "cat", color, hunger);
        this.food = "fish";
    }
    greet(){
        console.log(`Meow! I'm ${this.name} the ${this.species}!`);
    }
    food(){
        console.log(`Yum, I love ${this.food}!`);
    }
}


class Dog extends Animal{
    constructor(name, color, hunger){
        super(name, "dog", color, hunger);
        this.food = "kibble";
    }
    greet(){
        console.log(`Woof! I'm ${this.name} the ${this.species}!`);
    }
    food(){
        console.log(`Yum, I love ${this.food}!`);
    }
}

const oreo = new Dog ("Oreo", "Black and White", 2000);
console.log(oreo)
const lou = new Cat ("Lou", "cat", "tuxedo", 1000);
console.log(lou);
lou.greet();
lou.feed();
console.log(lou);

//Creating a summary class for Animals

class AnimalShelter {
    constructor(){
        this.animals = [];
    }
    addAnimal(animal){
        this.animals.push(animal);
    }
    adopt(animal){
        const animalIndex = this.animals.indexOf(animal);
        this.animals.splice(animalIndex, 1);
    }
}

const shelter = new AnimalShelter()

for (animal of animalData){
    let hunger = 50;
    if(animal.hunger){
        hunger = animal.hunger;
    }
    const newAnimal = new Animal(animal.name, animal.species, animal.color, hunger);
    console.log(newAnimal);
    shelter.addAnimal(newAnimal);
}

console.log(shelter)