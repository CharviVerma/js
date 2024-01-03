let a = 9;
if(a == 2){
    console.log("okay");
}
else if(a == 4){
    console.log("pokay");
}
else if(a == 8){
    console.log("sokay");
}
else if(a == 9){
    console.log("tokay");
}
else{
    console.log("nokay");
}

let fruit = 'Apple';

switch (fruit) {
  case 'Banana':
    console.log('Banana is yellow.');
    break;
  case 'Apple':
    console.log('Apple is red.');
    break;
  case 'Orange':
    console.log('Orange is orange.');
    break;
  default:
    console.log('Unknown fruit.');
}

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }

  const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}
