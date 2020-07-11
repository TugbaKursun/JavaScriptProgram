class Credentials{
    username = "cybertek";
    password = "cybertek123";

    get getUsername(){
        return this.username;
    }
    set setUsername(username){
        this.username = username;
    }

    get getPassword(){
        return this.password;
    }
    set setPassword(password){
        this.password = password
    }
}


var obj = new Credentials();
console.log(obj.getUsername);  //cybertek

obj.setUsername = "Username123";

console.log(obj.getUsername); //Username123

console.log(obj.getPassword);  //cybertek123

obj.setPassword = "Password123";

console.log(obj.getPassword);  //Password123

