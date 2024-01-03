// functions in javascript

function Charvi(){
    console.log("22 years old");
}
Charvi();

// Parameterized function
var x = 22;
var name = "4v";

function Charviii(myName, age){
    console.log(myName, age);
}
Charviii(name, x);

// Return type
function charviiiiii(stringName, stringAge){
    return stringName + stringAge;
}
console.log(charviiiiii(name, x));


// function as expression
// function is declared inside the variable

// let r = 7;
const area = function(r){
    return Math.PI*r*r;
}
console.log(area(5));
// can be used as variable value for other variables
let y = (area(7))
console.log(y);

// Arrow function 
let charvi = (a, b) => a + b;
console.log("4v", "verma");

let sum = (a, b) => a + b;
console.log(sum(3,6));

const string = () => "4viiiiiiiiiii";
console.log(string());

const areas = (r) => Math.PI*r*r;
console.log(areas(89));

const add = (t, q) => t+q;
console.log(add(7, 0));

const sub = (t, q) => t-q;
console.log(sub(7, 2));

const mul = (t, q) => t*q;
console.log(mul(7, 6));

const div = (t, q) => t/q;
console.log(div(7, 5));