
var TestBase = require("../Inheritance/TestBase.js");


class Test extends TestBase{

}

//console.log(Test.username);  //TestBase is not defined you need to give export and use import

console.log(Test.username);  //cybertek

console.log(Test.password);  //cybertek12345
Test.logIn();  //Loged in
