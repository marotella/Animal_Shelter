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

const lou = new Animal ("Lou", "cat", "tuxedo", "1000");
console.log(lou)
lou.greet()
lou.feed()
console.log(lou)

//Creating a summary or super class for Animals

class AnimalShelter {
    consructor(){
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