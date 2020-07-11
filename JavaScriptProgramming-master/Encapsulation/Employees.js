class Employees {
    name = "Ayse";
    lastname = "Turk";
    id = 987;
    salary = 150000;

    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }

    get getLastname() {
        return this.lastname;
    }
    set setLastname(lastname) {
        this.lastname = lastname;
    }

    get getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
    get getSalary() {
        return this.salary;
    }
    set setSalary(salary) {
        this.salary = salary;
    }

}

var obj = new Employees();
console.log(obj.getName);
console.log(obj.getLastname);
console.log(obj.getId);
console.log(obj.getSalary);

obj.setSalary = 200000;
console.log(obj.getSalary);
