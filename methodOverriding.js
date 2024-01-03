class Animal {
    makeSound() {
      return 'Some generic sound';
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      return 'Woof! Woof!';
    }
  }
  
  const animal = new Animal();
  const dog = new Dog();
  
  console.log(animal.makeSound()); // Output: Some generic sound
  console.log(dog.makeSound()); // Output: Woof! Woof!
  