class TestData{
    static str = "Cybertek";
    username = "cybertek123";



}

//static variables  same as in java
console.log(TestData.str);  //Cybertek

var name1 = TestData.str;

console.log(name1);  // Cybertek

//instance variables :  same as in java
var obj = new TestData();
console.log(TestData.username);  //undefined

console.log(obj.username);  //cybertek123

obj.username = "username123";
console.log(obj.username);  //username123

var obj2 = new TestData();
console.log(obj2.username);  //cybertek123

obj2.username = "Ayse123";
console.log(obj2.username);  //Ayse123


class Student{
    name = "Ayse";
    lastName = "Turk";
    id = 123;
    major = "SDET";
    static university = "Harvard";
}
var s1 = new Student();
console.log(s1.id); // 123

var unv = Student.university;
console.log(unv);  //Harvard

unv = "Oxford";
console.log(unv);  //Oxford

var s2 = new Student();
s2.id = 321;
console.log(s2.id); // 321
console.log(s1.id); // 123




