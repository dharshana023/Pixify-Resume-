var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class: Animal
var Animal = /** @class */ (function () {
    function Animal(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    // Method that all animals will have
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a sound: ").concat(this.sound));
    };
    return Animal;
}());
// Derived class: Dog
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, sound, breed) {
        var _this = _super.call(this, name, sound) || this; // Call the parent constructor
        _this.breed = breed;
        return _this;
    }
    // Override makeSound method to customize behavior for Dog
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " barks: ").concat(this.sound));
    };
    // Additional method specific to Dog
    Dog.prototype.fetch = function () {
        console.log("".concat(this.name, " is fetching!"));
    };
    return Dog;
}(Animal));
// Derived class: Cat
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, sound, color) {
        var _this = _super.call(this, name, sound) || this;
        _this.color = color;
        return _this;
    }
    // Cat-specific method
    Cat.prototype.purr = function () {
        console.log("".concat(this.name, " is purring."));
    };
    return Cat;
}(Animal));
// Derived class: Bird
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, sound, species) {
        var _this = _super.call(this, name, sound) || this;
        _this.species = species;
        return _this;
    }
    // Bird-specific method
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " is flying."));
    };
    return Bird;
}(Animal));
// Create instances of each class
var myDog = new Dog('Rex', 'Woof', 'Labrador');
var myCat = new Cat('Whiskers', 'Meow', 'Black');
var myBird = new Bird('Tweety', 'Chirp', 'Canary');
// Call common and specific methods
myDog.makeSound(); // Output: Rex barks: Woof
myDog.fetch(); // Output: Rex is fetching!
myCat.makeSound(); // Output: Whiskers makes a sound: Meow
myCat.purr(); // Output: Whiskers is purring.
myBird.makeSound(); // Output: Tweety makes a sound: Chirp
myBird.fly(); // Output: Tweety is flying.
