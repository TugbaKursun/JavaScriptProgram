/*
for loop:
while loop:
do while loop:

for in loop:

*/

for(var i = 0; i < 3; i++){
    console.log("Hello"); 
}

console.log("==============================");
var num = 5;
while(num > 0){
    console.log("Hello");
    num--;
}
console.log("==============================");

do{
console.log("Hola");  // Hola
}while(false);

console.log("==============================");
while(9 > 10){
    console.log("While loop");
}

console.log("==============================");
/*
int[]arr = {1,2,3};
for(DataType each : collection){
}
for in loop:
for(AnyName  in  collection){

}
*/

var nums = [5,4,3,2];

for(each in nums){
    console.log(each);  // 0 1 2 3  prints the index of nums not the elements
   
}

console.log("=======================");
var arr = [9,8,7,6,5];

for(each in arr){
   // console.log(each[each]); // undefined
  console.log(arr[each]);
}

var list = ["apple","pear","lemon","orange","banana"];
for(any in list){
    console.log(list[any]);
   
}