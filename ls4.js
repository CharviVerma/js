const myObject = {
    name: 'John',
    age: 30,
    country: 'USA'
  };
  
  const keyToCheck = 'age';
  
  if (myObject.hasOwnProperty(keyToCheck)) {
    console.log(`Key '${keyToCheck}' exists in the object.`);
  } else {
    console.log(`Key '${keyToCheck}' does not exist in the object.`);
  }
  