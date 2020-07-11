/*
var vs let vs const: 
var vs let: 
    var: variable name does not have to be unique
        can not be local variable , it is global, even if we decleared within the block we can still use it outside the block
    let : variable name must be unique intruduced in es6
        can be local variables. if it's decleared within block we  cannot access it outside the block

     const: final variable   

*/

var a = 100;
var a = "Muhtar";

console.log(a);

let b = "Ayse";
//let b = "Cybertek";
console.log(b);

console.log("==========================");

if(true){
    var i = 100;
}

console.log(i); // var  can never be local variable


for( var z = 0; z >= 9; z++){

}

console.log(z);

console.log("=======================");
const str = "cybertek school"; // final variable like in java, it cannot be changed
// str = "School"; // constant variable can not be changed
console.log(str);

