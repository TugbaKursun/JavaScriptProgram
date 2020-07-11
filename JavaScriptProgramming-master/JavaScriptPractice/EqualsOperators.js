/**== data typ onemli degil   value onemli
 * ==== burda data type da onmeli
 * != type onemli degil
 * !== type onmeli
 * once data typina bakiyor ayni 
 * degilse value yu knotrol etmiyor
 * ama data type farkli ise o vakit 
 * valuyu da bakiyor
*/

var str = "2.5";
var num = 2.5;
console.log(str == num); //true
console.log(str === num); //false

let a = 35;
let b = "35";
console.log(a != b); //false
console.log(a !== b); //true

let c = 10;
let d = 12;

console.log(c != d);//true
console.log(c !==d);//true