function isArmStrong(number) {
    let c = 0,a,temp;
    temp = number;
    while(number > 0){
        a = number % 10;
        number = number/10;
        c = c + (a*a*a);
    }
    if(temp == c){
       return true;
    }else{
        return false;
    }
}

var num = 153;
console.log(isArmStrong(num));

//Create a method to check if the passing argument is a prime number
var number = 2;
console.log("Is "+ number + " a prime numner?: " + isPrime(number));
function isPrime(num) {
    if(num == 2){
    return true;
    }
    else if (num%2==0) 
        return false; 
    //if not, then just check the odds 
    for(let i=3;i<=Math.sqrt(num);i+=2) { 
        if(num%i==0) {
            return false; 
        }
    }
     
    return true; 
}
var word = "ways";
console.log(reverse(word));


//Reverse an array with two different ways
function reverse(str) {
    let reverse = "";
    for(var i = str.length-1; i >= 0; i-- ){
        reverse += str[i];

    }
    return reverse;
}

//Store 10 random numbers into an Array then find the max and min
var numbers = [34,65,12,90,100,33,98,21,23,45];
console.log(findMax(numbers));
console.log(findMax2(numbers));
console.log(findMin(numbers));
console.log(findMin2(numbers));


function findMax(num) {
    let max = 0;
    for(var each of num){
        if(each > max){
            max = each;
        }

    }
    return max;
}
function findMax2(num) {
    
    return Math.max(...num)
}

function findMin(num) {
    let min = 9999999999999;
    for(var each of num){
        if(each < min){
            min = each;
        }

    }
    return min;
}
function findMin2(num) {
    
    return Math.min(...num);
}

//Write a method that gets any number from a string it gets and returns the number string.
//EX :extractNum("aa2aa3") ==> 23
var str4 = "aa2aa3";
console.log(returnNumbersFromString(str4));
console.log(str4[0]);

function returnNumbersFromString(str) {
    let num = "";
    for(let i = 0; i < str.length; i++){
        if(Number.isInteger(str.charAt(i))){
            num += str.charAt(i);
        }
    }
    return num;
}


//write a method that Return the number of times that the string "JavaScript" 
//appears anywhere in the given string word.
let str5 = "I love JavaScript . JavaScript is fun!Next time I will learn Phyton."
console.log(frequenceOfWord(str5));
console.log(frequenceOfWord2(str5));

function frequenceOfWord(str) {
   let arr = str.split(" ");
   let count = 0;
   for(let i = 0; i < arr.length; i++){
       if(arr[i]== "JavaScript"){
           count++;
       }
   }
   return count;
}

function frequenceOfWord2(str) {
    let arr = str.split(" ");
    let count = 0;
    for(let each of arr){
        if(each == "JavaScript"){
            count++;
        }
    }
    console.log(arr);
    return count;

 }

 function frequenceOfWord3(str) {

 }

 //A sandwich is two pieces of bread with something in between. 
 //Print the string that is between the first and last appearance of "bread" in the given string,
 // or return string "nothing" if there are not two pieces of bread.
let sandiwich = "I want to eat jelly bread and orange juice with the bread";
console.log(printWord(sandiwich));

 function printWord(str) {
      let indexOfFirst = str.indexOf("bread");
      let IndexOfLast = str.lastIndexOf("bread");
      return (indexOfFirst != IndexOfLast)? (str.substring(indexOfFirst+5,IndexOfLast)) :"nothing";
     
 }
