// object and nested objects

const student= {
    "name": "charvi",
    "rno": 45,
    "age": 22,
    "marks":{
        "science" : 60,
        "Hindi": 89
    }
  }
  console.log(student);
  console.log(student.age);
  console.log(student.marks.Hindi);

//   function inside the object (expression(inline function))

const person = {
    "name" : "Charvi Verma",
    "age" : 22,
    greet: function() {console.log('hello');}
}

person.greet();

// arrow function

const student1 = {
    "name" : "Charvi Verma",
    "age" : 22,
    some : (a, b) => a + b,
}

console.log(student1.some("4v", " verma"));
