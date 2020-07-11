/*
java: 
Acces-modifier  specifier  return-tpye methodName(parameter){

javascript: 
    fumction functionName(parameter){

    }

}

*/

function addTwoNum(num1, num2){
    console.log(num1 + num2);
}

addTwoNum(10, 20);

function  reverseString(str){
    if(typeof str == "string"){
    var result = "";
     for(var i = str.length -1; i >= 0; i--){
         result = result.concat("" + str.charAt(i));
     }
     console.log(result);
 }else{
     console.log("No String is given");
 }

}

 reverseString("Ayse");

 //typeof: returns the data type
 var num1 = "Cybertek";
 console.log(typeof num1); // string


 var bool2 = true;
 console.log(typeof bool2); // boolean

 console.log("====================");

 function multiplyTwoNum(num1, num2){
     var result = num1 * num2;
     return result;
 }

 var product = multiplyTwoNum(10,20);

 console.log(product);

 