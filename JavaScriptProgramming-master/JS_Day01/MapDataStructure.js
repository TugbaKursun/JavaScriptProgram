var map = new Map();
/*
set(Key, value): add keys and values to the map
get(key):return the value
delete(key): delete the key and value
has(key): verifies the key value
keys():returns all the keys
values(); return all the values
*/

map.set("Ayse", 1200000 );
map.set("Gurbey", 100000);
 
console.log(map);

/*
for of loop
for(var [X, Y] of mapName)
*/

for( var [X, Y] of map){
    console.log(X + "'s salary is $" + Y );

}


console.log(map.get("Ayse"));
map.delete("Ayse");

console.log(map);

/*
keys():
values():
*/

var students = new Map();
students.set("Ayse",1);
students.set("Aysegul",2);
students.set("Husniye", 3);

for(var key of students.keys()){
    console.log(key);
}

console.log("====================");

for( var value of students.values()){
    console.log(value);

}


console.log("==========================");
var map1 = new Map();

map1.set("Ayse", 150000);
map1.set("Aysegul" , 145000);
map1.set("Husniye",140000);
map1.set("Mahriban",135000);

for(var [a,b] of map1){
    console.log(a + " " + b);
}

console.log(map1.get("Ayse"));
console.log(map1.has("Husniye"));
console.log(map1.values());
console.log(map1.delete("Mahriban"));
console.log(map1.keys());

/**
* 2.Complete a void method printUniqueNumbers() that will print
* all unique integers(non repeated ones) from an array of ints.
* Every single unique int should be printed from the new line.
*/
var arr = [1,3,5,6,6,3,2,8,6,0,9,9];
printUniqueNumbers(arr);

function printUniqueNumbers(arr) {
    let map = new Map();
   for(let i =0; i < arr.length; i++){
       if(!map.has(arr[i])){
           map.set(arr[i],1);

       }else{
           map.set(arr[i],map.get(arr[i]) +1);
       }

   }
   for(let [key,value] of map){
       if(value === 1){
           console.log(key);
       }
   }
   
} 

/*
 Write a return method that can find the frequency of characters
Ex:  FrequencyOfChars("AAABBCDD") ==> A3B2C1D2
*/

var str = "AAABBCDD";
frequencyOfChars(str);

function frequencyOfChars(str) {
    let map = new Map();
    for(let i = 0; i < str.length; i++){
        if(!map.has(str.charAt(i))){
            map.set(str.charAt(i),1);
        }else{
            map.set(str.charAt(i),map.get(str.charAt(i))+1);
        }
    }
    for(let [key,value] of map){
        console.log(key + ":" + value);
    }
}





