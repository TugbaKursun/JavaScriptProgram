var Student = require("../Ineritance/Student.js");

class School extends Student{
    static classRoom = 123;
    static building = "San Marcos Hall";
    static library = "University Library";
    static print(){
        console.log(Student.name + " has class in " + this.classRoom + 
                   "which is located in "+ this.building );
        console.log(this.library + " also is found in " + this.building);
    }
}