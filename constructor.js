// function person(){
//     this.name = "charvi",
//     this.age = 22,
//     this.greet = function(){
//         console.log("hello");
//     }
// }

// const person1 = new person();
// const person2 = new person();

// console.log(person1.name);
// console.log(person2.name);

function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello");
    }
}

const person1 = new Person("Charvi", 22);
const person2 = new Person("Prakarsh", 21);

console.log(person1.name); 
console.log(person2.name); 
