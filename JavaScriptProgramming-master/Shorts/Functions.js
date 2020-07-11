/*
methods in java :
access-modifier  specifier  return-type methodName(parameters s){
    statements;
}

in javascript:
functions: 
    function functionName(parameters s){
        statements;
    }
in javascript there is no method overloading

*/

function addNums(num1, num2){
    let result = num1 + num2;
    console.log(result);
}

function addNums(num1, num2, num3){
    let result = num1 + num2 + num3;
    console.log(result);
}


addNums(10,20);   // 30  // this function replace with the last one so that's why is says NAN, we must give different function name

addNums(10,20,30);// 60

//return functions
function multiplyTwoNums(num1, num2){
    let result = num1 * num2;
    return  result;
}

console.log(multiplyTwoNums(10,20)); // 200



function concatTwowords(str1 ,str2){
    return str1 + " " + str2;
}

var str = concatTwowords("Cybertek", "School");
console.log(str);  //Cybertek School


console.log("================================");

console.log(reverse("Ayse"));

var letters = "AAABBBBCCCCDDDDEFG";
removeDuplicates(letters);

function reverse(str) {
    let reverseStr = "";
    for(var i = str.length-1; i >= 0; i--){
        reverseStr += str.charAt(i);
    }
    return reverseStr;
}


// javaScript does not have contains instead of it has includes() method
function removeDuplicates(str) {
    let nonDuplicate = "";
    for(var i = 0; i < str.length; i++){
        if(!nonDuplicate.includes(str.charAt(i))){

            nonDuplicate += str.charAt(i);

        }
    }
    console.log(nonDuplicate);
}