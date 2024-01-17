class University {
    constructor(name) {
      this.universityName = name;
      this.depts = [];
    }
  
    addDept(dept) {
      this.depts.push(dept);
    }
  
    removeDept(dept) {
      const index = this.depts.indexOf(dept);
      if (index !== -1) {
        this.depts.splice(index, 1);
      }
    }


  
    displayDepts() {
      console.log(`Departments in ${this.universityName}:`);
      this.depts.forEach((dept) => {
        console.log(dept);
      });
    }
  }
  
  const myUniversity = new University('Maharaja Agrasen Institute Of Technology');
  myUniversity.addDept('Computer Science');
  myUniversity.addDept('Physics');
  myUniversity.addDept('Maths');
  myUniversity.addDept('Operating Systems');
  myUniversity.displayDepts(); 
  
  myUniversity.removeDept('Physics');
  myUniversity.removeDept('Maths');
  myUniversity.displayDepts(); 
  