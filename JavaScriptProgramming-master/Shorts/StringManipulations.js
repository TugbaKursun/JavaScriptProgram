/*
concat()
toLowerCase()
toUpperCase()
trim()
indexOf()
substring()
startsWith()
endsWith()
charAt()
length

*/

var str = "     Cybertek";
str = str.concat(" School    ");

console.log(str);
str = str.trim();

console.log(str);

console.log(str.startsWith('C'));  // true
console.log(str.startsWith('Z'));  // false

console.log(str.substring(1,3));  //yb ending index excluded
console.log(str.substring(0));  // Cybertek School

console.log(str.charAt(2)); //b

console.log(str.length);  // 15


console.log("=======================");

var name = "Ayse" ;
name = name.concat(" Turk");
console.log(name);

name = name.toLowerCase();
console.log(name);

name = name.toUpperCase();
console.log(name);

console.log(name.indexOf('T'));
console.log(name.indexOf("AY"));

console.log(name.substring(0,4));
console.log(name.substring(4));

console.log(name.startsWith("A"));
console.log(name.endsWith('K'));

console.log(name.charAt(5));
console.log(name.charAt(8));

console.log(name.length);






