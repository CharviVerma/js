const myObject = {
    name: 'John',
    age: 30,
    country: 'USA'
  };
  
  for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
  }
  