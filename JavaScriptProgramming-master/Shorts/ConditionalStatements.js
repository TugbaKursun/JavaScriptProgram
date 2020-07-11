/*
if(condition){
    statement;
}else{

}


if(condition){
    statement;
}else if(condition 2){
    statement;
}else{
    statement;
}

same in java
*/


var num = 10;

if(num < 9){
    console.log(num + " is less than 9");
}else{
    console.log(num + " is greater than 9");
}


var str = "Ayse";
if(str.startsWith("J")){
    console.log(str +  " starts with J");
}else if(str.startsWith("A")){
    console.log(str + "  starts with A");
}else{
    console.log(str + " starts with something");
}



/*
in java : the expression cannot be boolean, double, float, long
switch(expression){
    case  value :
        statement;
        break;
    case  value1 :
        statemet;
        break;
            
}

in javascritp we do not have any restrictions 


*/

var num = 8.5;

switch(num){
    case 5.5 :
        console.log("number is 5.5");
        break;
    case 8.5 :
        console.log("number is 8.5");   
        break;

    default:
        console.log("Unknown number");    
}

var n = false;
switch(n){
    case true :
        console.log("number is true");
        break;
    case false :
        console.log("number is false");   
        break;

    default:
        console.log("Unknown number");    
}


/*
if & else  : condition ? statement : statement;


*/


var number = true ? 15 : 20;
console.log(number);  // 15


var n1 = 0;
if( 8 > 9){
    n1 = 8;
}else if( 8 == 9){
    n1 = 9;
}else {
    n1 = 0;
}

console.log(n1);  // 0

var n2 = ( 8 > 9)? 8 : ( 8 == 9)? 9: 0;

console.log(n2);  // 0

console.log("===============================");

var grade = 67.3;

switch(grade){
    case 80.5 : 
    console.log("The grade is B");
    break;
    case 67.3 :
        console.log("The grade is C");
        break;
    case 35 :
        console.log("The grade is F");
        break;
        default :
        console.log("Invalid grade");

}

var result = (grade <= 100 && grade >= 90)? "A"
:(grade <= 89 && grade >= 80)? "B" 
:(grade <= 79 && grade >= 70)? "C"
:(grade <= 69 && grade >= 60)? "D": "F";
console.log(result);