function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const inputString = 'hello world';
  const capitalizedString = capitalizeFirstLetter(inputString);
  
  console.log(capitalizedString);
  
  