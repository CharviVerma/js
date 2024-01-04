function performAction() {
    try {
      console.log('Performing action...');
      throw new Error('Something went wrong');
    } catch (error) {
      console.error('Error occurred:', error.message);
    } finally {
      console.log('Cleanup or final tasks');
    }
  }
  
  performAction();
  