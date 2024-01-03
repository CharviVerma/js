// constructor based inheritance


function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
  };
  
  function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
  }
  
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.study = function() {
    return `${this.name} is studying`;
  };
  
  // Creating instances
  const person1 = new Person('Alice');
  const student1 = new Student('Bob', 10);
  
  console.log(person1.greet()); // Output: Hello, my name is Alice
  console.log(student1.greet()); // Output: Hello, my name is Bob
  console.log(student1.study()); // Output: Bob is studying
  