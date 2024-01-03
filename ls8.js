class University {
    constructor(name) {
      this.name = name;
      this.departments = [];
    }
  
    addDepartment(department) {
      this.departments.push(department);
    }
  
    removeDepartment(department) {
      const index = this.departments.indexOf(department);
      if (index !== -1) {
        this.departments.splice(index, 1);
      }
    }
  
    displayDepartments() {
      console.log(`University: ${this.name}`);
      console.log("Departments:");
      this.departments.forEach(department => console.log(department));
    }
  }
  
  const university = new University('My University');
  university.addDepartment('Computer Science');
  university.addDepartment('Mathematics');
  university.displayDepartments();
  
  university.removeDepartment('Mathematics');
  university.displayDepartments();
  