// class based inheritance we'll have two classes

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

class Student extends Person {
    constructor(name, grade) {
      super(name);
      this.grade = grade;
    }
  
    study() {
      return `${this.name} is studying`;
    }
  }
  
  // Creating instances
  const person1 = new Person('Alice');
  const student1 = new Student('Bob', 10);
  
  console.log(person1.greet()); // Output: Hello, my name is Alice
  console.log(student1.greet()); // Output: Hello, my name is Bob
  console.log(student1.study()); // Output: Bob is studying