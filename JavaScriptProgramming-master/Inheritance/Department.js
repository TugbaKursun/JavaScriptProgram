var Employee = require("../Inheritance/Employee.js");

class Department extends Employee{

    static departmentId = 23;
    static departmentName = "SDET";
    static manager = "Ayse Turk";

    static print(){
        console.log("Employee Name : " + Employee.name);
        console.log("Department ID : " + this.departmentId);
        console.log("Manager Name : " + this.manager);
        
    }
}
Department.print();
console.log(Employee.salary);
console.log(Employee.title);
Employee.print();