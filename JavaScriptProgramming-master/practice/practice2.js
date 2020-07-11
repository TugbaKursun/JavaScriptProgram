	/*
	 Given a String array arr with the following elements
["zero", "one", "two","three","four"]
Create another array fewValues and copy words that have letter "e" in them
You need to know how many element contain "e" and create array accordingly
Values in fewValues array need to be["zero", "one","three"]
Examples:
arr -> ["aa", "be", "lol", "lel", "oreo"] 
fewValues -> ["be",  "lel", "oreo"] 
arr -> ["e", "hey", "bye", "furey", "spoon"] 
fewValues ->["e", "hey", "bye", "furey"] 
	 */

     let arr = ["aa", "be", "lol", "lel", "oreo"];
     console.log(hasE(arr));
     console.log(hasE2(arr));

     function hasE(arr) {
         let str = "";
         for(let i = 0; i < arr.length; i++){
             if(arr[i].includes("e")){
                 str += arr[i] + " ";
             }
         }
         return str.trim().split(" ");

     }

     function hasE2(arr) {
         let str = "";
         for(let each of arr){
             if(each.toLowerCase().includes("e")){
                 str += each + " ";
             }
         }
         return str.trim().split(" ");
     }
     
	/*
Given an array temps of doubles, containing temperature data, compute the average temperature. 
Store the average in a variable called avgTemp. 
Besides temps and avgTemp, you may use only two other variables -- 
an int variable k and a double variable named total, which have been declared.
Example: 
input: 80 88 88 84 82 78 60 68
output: 78.5
	 */

    let temps =[80, 88, 88, 84, 82, 78, 60, 68];
    temps.push(100);
    temps.pop();
    console.log(getAverage(temps));

    function getAverage(arr) {
        let total = 0.0;
        for(let each of arr){
            total += each;
        }
        return total/ arr.length;
    }

   /*
	 Given an array nums, calculate count of even numbers in nums and
	 print out to console.
	 */
    
     let nums = [12,45,63,77,88,90,100,43];
     countEven(nums);

     function countEven(arr) {
         for(let each of arr){
             if(each % 2 == 0){
                 console.log(each);
             }
         }
     }
/*
Given an array of ints, print true if the array contains a 5 next to a 5 anywhere 
in the array. If no consecutive 5s or no 5s are detected in your code then print false.
*/
let intArray = [1,2,3,4,5,5];
console.log(has55(intArray));
function has55(arr) {
    let count = 0;
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i]== 5 && arr[i+1] == 5){
            count++;
        }  
    }
    return (count >= 1)? true : false;
}

/*
	 Given a String array words, iterate through each word and print first and 
	 last letter of each element in the format below.
*/
let strArr = ["words","ayse","aysegul","husniye","last"];
console.log(printFirstAndLast(strArr));
function printFirstAndLast(strArray) {
    let str = "";
    for(let each of strArray){
        str += each[0] + each[each.length-1] + " ";
    }
    return str.trim().split(" ");
}

/*How to calculate total number of vowels in String?
Write a java program to calculate total number of vowels in String .
for example : 
a , e, i, o, u
if the original string : " Alive is awesome "
then the number of vowels is : 8 
*/
let str =  "Alive is awesome";
console.log(countVowels(str));
console.log(countVowels2(str));
function countVowels(str) {
    let vowels = ['a' , 'e', 'i', 'o', 'u'];
    let count = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j< vowels.length; j++ ){
            if(str.charAt(i)== vowels[j]){
                count++;

            }
        }
        
    }
    return count;
}
function countVowels2(str) {
    let count = 0;
    let arr = str.toLowerCase().split("");
    for(let each of arr){
        if(each == 'a'|| each == 'e'||each == 'i'||each == 'o'||each == 'u'){
            count++;
        }
    }
    return count;
}

/*
Convert Lowercase to Uppercase in javaScript and Uppercase to Lowercase without using built in method ?
Write  a javaScript program to convert Lowercase to Uppercase and vice versa in a given String.
A-Z : 65-90
a-z : 97-122
*/
upperOrLower(str);
function upperOrLower(str) {
    let arr = str.split("");
    for(let each of arr){
        if( each <= 90 && each >= 65){
            each += 32;
            console.log(each);
        }else if(each <= 122 && each >= 97){
            each -= 32;
            console.log(each);
        }
        if(each == 32){
            each = " ";
            console.log(each);
        }
    }
    
}

