
const sourceObj1 = { a: 1, b: 2 };
const sourceObj2 = { b: 3, c: 4 };


const targetObj = {};


Object.assign(targetObj, sourceObj1, sourceObj2);

console.log(targetObj); 
