"Encapsulation"

class Person {
    constructor(name) {
        this.name = name; 
    }

    get PersonName() {
        return this.name;
    }

    set PersonName(a) {
        this.name = a;
    }
}

let person1 = new Person('charvi');
console.log(person1.PersonName); 
let person2 = new Person('prakarsh');
console.log(person2.PersonName); 