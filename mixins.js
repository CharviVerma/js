// Mixin with specific functionality
const canEat = {
    eat(food) {
      console.log(`Eating ${food}`);
    }
  };
  
  // Class using the mixin
  class Animal {
    // Here, the mixin functionality is added to the class using Object.assign
    constructor() {
      Object.assign(this, canEat);
    }
  
    // Other class methods...
  }
  
  const animal = new Animal();
  animal.eat('apple'); // Output: Eating apple
  