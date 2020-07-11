 var set = new Set();
 /*
add(value): add the value to the set
delete(value): delete
clear(): removes everything
has(value):  returns boolean ,contains 
values():
 */

 set .add(10); 
 set .add(10); 
 set .add(10); 
 set .add(10); 
 set.add("Ayse");
 set.add("Gurbey");
 set.add('$');
 set.add(true);
 set.add("Aysegul");
console.log(set);
 set.delete(10);
 set.delete("Aysegul");
 console.log(set);

 //set.clear();
console.log(set);

 var bool1 = set.has("Ayse");

console.log(bool1);

console.log("======================");

/*
for of loop: similar with for each loop
for(var varname of  set.values())

*/

for( var each of set.values() ){
    console.log(each);
}

console.log("=======================");
var students = ["Ayse", "Aysegul", "Husniye","Mahriban" ,"Elvira"];

for( var eachStudent of students.values() ){
console.log(eachStudent);
}

console.log("========================");
var setList = new Set();
setList.add("apple");
setList.add("pear");
setList.add("strawberry");
setList.add("watermelon");
setList.add("grape");
setList.add("apple");
setList.add("apple");

console.log(setList); //Set { 'apple', 'pear', 'strawberry', 'watermelon', 'grape' }
setList.delete("apple");
console.log(setList);//Set { 'pear', 'strawberry', 'watermelon', 'grape' }
console.log(setList.has("banana"));  //false
for(var each of setList.values()){
    console.log(each);
}


var str = "Apple";
console.log(str[0]); //A
var myarr = [["apple","3"],["Pear",2]];
console.log(myarr[0][1]); //3

 /*
* Write a return method that can remove the duplicated values from String
* Ex: removeDup("AAABBBCCC") ==> ABC
*/

var str2 = "AAABBBCCC";
var set2 = new Set();
for(var each of str2){
    set2.add(each);
}

console.log(set2);  //Set { 'A', 'B', 'C' }
var unique = "";

for(var each of set2.values()){
    unique += each;
}

console.log(unique);   //ABC

/*7.Write a removeAll() takes two parameters: 
an ArrayList of Strings called wordList, and 
a String called targetWord.So remove the targetWord from ArrayList.
EX :ArrayList("hi","hey","hi","yo"));  ----> removeAll(wordList,"hi"); --->["hey","yo"]
*/
var wordList = ["hi","hey","hi","yo"];
var targetWord = "hi";

console.log(removeAll(wordList,targetWord));  //Set { 'hey', 'yo' }

function removeAll(arr,str) {
    let set = new Set();
    for(let each of arr){
        if(!set.has(each) && each !== "hi"){
            set.add(each);
        }
    }
    return set;
}

console.log(remove(wordList,targetWord));  //Set { 'hey', 'yo' }

function remove(arr,str) {
    let set = new Set();
    for(let each of arr){
        set.add(each);
    }
    for(let each of set.values()){
        if(each == "hi"){
            set.delete(each);
        }
    }
    return set;
}