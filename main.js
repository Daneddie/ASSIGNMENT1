
// Create two classes: Animal and Dog. 


// 1a. The Animal class should take two parameters in the constructor (name and animalType). 
// Set them as its public properties.
  
   function Animal(name, animalType) {
   this.name = name;
   this.animalType = animalType;
  };
   
 
// 1b In addition, the Animal class should have two functions: sayName and sayAnimalType. sayName prints name, and sayAnimalType prints animalType initialized in the constructor. 
 
 Animal.prototype.sayName = function () { 
    console.log(this.name);
 }
 
 Animal.prototype.sayAnimalType  = function () { 
    console.log(this.animalType);
 } 
 
 
// 2. Finally, the Dog class inherits from the Animal class. 


//  2a. Creating the Dog class:

function Dog(name) {
  Animal.call(this, name, "Dog");
} 
 
// 2b. Getting its prototype from Animal:
 Dog.prototype = Object.create(Animal.prototype);
  
  
  // Example Application
  
  var myAnimal = new Animal("ditto", "pokemon"); 
  myAnimal.sayName(); // "ditto"
  myAnimal.sayAnimalType(); // "pokemon"
  
  var myDog = new Dog("candy", "dog");
  myDog.sayName(); // "candy"
  myDog.sayAnimalType(); // "dog"
 