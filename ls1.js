function performOperation() {
    if (arguments.length === 1) {
      console.log("Operation with one argument:", arguments[0]);
    } else if (arguments.length === 2) {
      console.log("Operation with two arguments:", arguments[0], arguments[1]);
    } else {
      console.log("Invalid number of arguments");
    }
  }
  
  performOperation(5);
  performOperation(10, 20);
  