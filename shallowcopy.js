const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  const shallowCopy = { ...originalObject };
  

  shallowCopy.name = 'Alice';
  shallowCopy.address.city = 'San Francisco';
  
  console.log('Original Object:', originalObject);
  console.log('Shallow Copied Object:', shallowCopy);
  