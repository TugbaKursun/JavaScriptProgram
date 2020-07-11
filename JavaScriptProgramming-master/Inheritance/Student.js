class Student {
    static name = "Ayse";
    static studentId = 1;
    static gpa =3.95;
    static major = "Computer Science"

    static print(){
        console.log("Student Name ; "  + this.name + 
                    "\n Student ID :   " + this.studentId +
                    "\n Student GPA :  " + this.gpa +
                    "\n Student Major : " + this.major) 
            
        }
    }
//baska classlarda kullanabilmek icin
    module.exports = Student;
