var testData = require("/Users/ayseturk/Desktop/JavaScript Programming/TestData/Data.json");  // absolute path

console.log(testData.Name);  // Ayse

/*
var testData = require("../JavaScript Programming/TestData/Data.json"); //relative path
console.log(testData.ID);

*/

console.log(testData.ID); //123

var students = require("/Users/ayseturk/Desktop/JavaScript Programming/TestData/Students.json");

console.log(students.Ayse);  //{ Name: 'Ayse Turk', ID: '12', Salary: '100000' }

console.log(students.Aysegul);  //{ Name: 'Aysegul Yigit', ID: '13', Salary: '120000' }
console.log(students["Ayse"]);  // { Name: 'Ayse Turk', ID: '12', Salary: '100000' }

console.log(students["Ayse"]["Salary"]);  //100000

console.log(students.Ayse.Salary); //100000

console.log(students.Zeynep.ID);  //14
console.log(students["Zeynep"]["ID"]);  //14


console.log("====================");
var fruitMarket = require("../TestData/Fruit.json");

console.log(fruitMarket.Apple);
console.log(fruitMarket.Apple.color);

console.log(fruitMarket);
console.log(fruitMarket["Banana"]["color"]);