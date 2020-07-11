/*
==: can compare different data types, does not care data types
===: does care about data types // same as in java

not equal operators
!=:does not care data types
!==: does care about data types // same as in java

*/

console.log(9 == "9");  //true
console.log(9 == "10"); //false

console.log(9 === "9");  //false
console.log(9 === 9 );  //true

console.log(9 != "8");  // true
console.log(9 != "9"); //false

console.log(9 !== "9"); //true

console.log(12 == "12"); // true
console.log(12 == "13"); //false

console.log(12 === "12");// false
console.log(12 === 12); // true

console.log(45/5 == 25/5);// false

console.log(31 != "31"); //false
console.log(12 !== 13); //true