// Base class: Animal
class Animal {
    name: string;
    sound: string;

    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
    }

    // Method that all animals will have
    makeSound(): void {
        console.log(`${this.name} makes a sound: ${this.sound}`);
    }
}

// Derived class: Dog
class Dog extends Animal {
    breed: string;

    constructor(name: string, sound: string, breed: string) {
        super(name, sound);  // Call the parent constructor
        this.breed = breed;
    }

    // Override makeSound method to customize behavior for Dog
    makeSound(): void {
        console.log(`${this.name} barks: ${this.sound}`);
    }

    // Additional method specific to Dog
    fetch(): void {
        console.log(`${this.name} is fetching!`);
    }
}

// Derived class: Cat
class Cat extends Animal {
    color: string;

    constructor(name: string, sound: string, color: string) {
        super(name, sound);
        this.color = color;
    }

    // Cat-specific method
    purr(): void {
        console.log(`${this.name} is purring.`);
    }
}

// Derived class: Bird
class Bird extends Animal {
    species: string;

    constructor(name: string, sound: string, species: string) {
        super(name, sound);
        this.species = species;
    }

    // Bird-specific method
    fly(): void {
        console.log(`${this.name} is flying.`);
    }
}

// Create instances of each class
let myDog = new Dog('Rex', 'Woof', 'Labrador');
let myCat = new Cat('Whiskers', 'Meow', 'Black');
let myBird = new Bird('Tweety', 'Chirp', 'Canary');

// Call common and specific methods
myDog.makeSound();  // Output: Rex barks: Woof
myDog.fetch();      // Output: Rex is fetching!

myCat.makeSound();  // Output: Whiskers makes a sound: Meow
myCat.purr();       // Output: Whiskers is purring.

myBird.makeSound(); // Output: Tweety makes a sound: Chirp
myBird.fly();       // Output: Tweety is flying.
