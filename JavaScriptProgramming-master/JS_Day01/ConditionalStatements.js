/*
if stattement: 100% same with java
ternary: 100% same with java
switch statement: 85% same with java
*/

if(9 > 10){
    console.log("Hello");
}else if(11 > 12){
    console.log("Hola");
}else {
    console.log("Merhaba");
}

var str = (9 > 10) ? "Hello" : (11 > 12)? "Hola" :"Merhaba";
console.log(str);

//boolean, decimals, long java does not accept in switch statement

var boo = 5.5;

switch(bool){  // accepts any data type
    case true :
        console.log("true");
        break;
    case 5.5 :
        console.log("False");    
        break;
     default:
         console.log("Maybe");   
}


