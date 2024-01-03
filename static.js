class MyClass {
    constructor(value) {
      this.value = value;
    }
  
    // Instance method
    getValue() {
      return this.value;
    }
  
    // Static method
    static multiply(x, y) {
      return x * y;
    }
  }
  
  const instance = new MyClass(5);
  
  console.log(instance.getValue()); // Output: 5
  
  // Calling the static method without creating an instance
  console.log(MyClass.multiply(2, 3)); // Output: 6
  