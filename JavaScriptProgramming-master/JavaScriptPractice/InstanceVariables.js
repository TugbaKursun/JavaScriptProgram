class Employee{
    static id = 1;
    firstname = "Ayse";
    lastname = "Turk";

}

console.log(Employee.id);
//console.log(Employee.firstname); undefined

var emp1 = new Employee();
console.log(emp1.firstname);
console.log(emp1.lastname);

emp1.firstname = "Tugba";
console.log(emp1.firstname);

Employee.id = 4;
console.log(Employee.id);