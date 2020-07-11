class TestBase{
   // var username = "cybertek"; must be static
   static username = "cybertek";
   static password = "cybertek12345";

  static logIn() {
       console.log("Loged in");
   }
}

module.exports = TestBase;


class Test1 extends TestBase {

}

console.log(TestBase.username);  //cybertek
console.log(Test1.username); //cybertek

TestBase.logIn();  //Loged in
Test1.logIn();    //Loged in

