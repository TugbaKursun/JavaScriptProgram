
var Animals = require("../Inheritance/Animals.js");

class Dog extends Animals{
    static habitat = "every place";
    static eat = "bone";
    static makeSound(){
        console.log("Dog makes wooff sound");
    }

}

console.log(Animals.habitat);
console.log(Animals.domain);
console.log(Animals.eat);
Animals.makeSound();


Dog.makeSound();
console.log(Dog.habitat);
console.log(Dog.eat);
console.log(Dog.domain);