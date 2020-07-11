var car1 ={
    make: "Toyota",
    model: "Corolla",
    year: 2019
};

function car(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}


var car2 = new car("BMW","X5",2020);
console.log(car2);  // car { make: 'BMW', model: 'X5', year: 2020 }

var car3 = new car("Lexus", "RX",2020);
console.log(car3);  // car { make: 'Lexus', model: 'RX', year: 2020 }

console.log(car2.make); // BMW
console.log(car2["make"]); //BMW

console.log(car3["make"]); // Lexus


function dog(breed,color, gender,age){
    this.breed = breed;
    this.color = color;
    this.gender = gender;
    this.age = age;
}

var dog1 = new dog("Husky","white","Female", 7);
console.log(dog1);  //dog { breed: 'Husky', color: 'white', gender: 'Female', age: 7 }

console.log(dog1["breed"]);  //Husky
console.log(dog1.breed);  //Husky


console.log("================================");

function Student(id,name,lastname,major,grade) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.major = major;
    this.grade = grade;
}

var student1 = new Student(1,"Ayse","Turk","Computer Science","Senior");
console.log("First name and Last name: " + student1.name + " " + student1.lastname);
console.log("First name and Last name: " +student1["name"] + " " + student1["lastname"]);

console.log("Major: " + student1.major + " Grade: " + student1["grade"] );

console.log(student1);


var employee ={
    name :"Ayse",
    lastname : "Turk",
    id : 123,
    salary : 150000,

};
function Employee(name, lastname, id, salary) {
    this.name = name;
    this.lastname = lastname;
    this.id = id;
    this.salary = salary;
}

var emp1 = new Employee("Erick" ,"Smith" ,45, 100000);
console.log(employee.name + " " +  employee.lastname);
console.log(emp1.name + " " + emp1.lastname);
console.log(" Employee salary: "+ employee.salary);
console.log(" Employee salary: "+ emp1.salary);