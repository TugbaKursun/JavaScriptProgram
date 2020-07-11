/*
while loop: same with java
do-while: same with java
for loop:same with java

for in loop:
for of loop
 break:exits the loop or switch statemen
 continue:skip the iteration
*/

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

for(var j = 0; j < 10; j++){
    console.log(j);
}

for(var a = 0; a < 10; a++){
    console.log(a);
    continue;
}
console.log("###########################");

var arr = [1, 2, 3, 4, 5, 10.5];
//         0  1  2  3  4   5
 /*
 for( name in  arr){

 }
 */

 for(each in arr){
     console.log(each);
 }

 console.log("====================");

 var strArr = ["Ayse", "Zeynep", "Gurney" , "Aysegul", "Husniye"];

 for(anyName in strArr){
     console.log(strArr[anyName]);

 }

 console.log("====================");
 
 for( var e = 0; e < strArr.length; e++){
     console.log(strArr[e]);
 }

 


