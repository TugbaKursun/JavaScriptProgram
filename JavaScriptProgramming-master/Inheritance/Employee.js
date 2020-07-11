class Employee{
    static name = "Tugba Kursun";
    static id = 5;
    static age = 35;
    static title = "QA Automation Engineer";
    static salary = "120000"

    static print(){
        console.log("Name : " + this.name);
        console.log("ID : " + this.id);
        console.log("Age : " + this.age);
        console.log("Title : " + this.title);
        console.log("Salary : " + this.salary);

    }
    
}
module.exports = Employee;