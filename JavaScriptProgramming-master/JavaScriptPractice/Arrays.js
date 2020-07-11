var names = ['Ayse','Husniye','Tugba','Melike','Aysegul']

//olmayan index istediginde indefend gelir
//sort etmek
console.log(names.sort());

//yeni element ekle sona ekliyo
names.push("Ayca")
console.log(names);

//pop ensondakini cikartiyor.last in firts out
names.pop();
console.log(names);

//shift, first in first out
names.shift();
console.log(names);

//unshift, koydugunu 0. indexe koyuyor
names.unshift("Busra");
console.log(names);

//arrayin size ini bulmak
console.log(names.length);


let arr = [23, 22, 67, 48, 1, 8, 9];
console.log(greaterThanAvarage(arr));
/**ornek
 * 
 * 
Write a Java program to find the numbers greater than the 
average of the numbers of a given array
 */

 function greaterThanAvarage(arr){
     let array =[];
     let sum= 0;
     let avarage =0;

     for(let each of arr){
            sum += each;
     }
     avarage = sum / arr.length;
     for(let each of arr){
         if(each> avarage){
        array.push(each)
     }
    }
    return array;
 }


 /**
* Write a Java program to move every positive number to the right
* and every negative number to the left of a given array of integers
* Expected Output:
* Original array: [-2, 3, 4, -1, -3, 1, 2, -4, 0]
* Result: [-4, -3, -2, -1, 0, 1, 2, 3, 4]
*/
let nums = [-2, 3, 4, -1, -3, 1, 2, -4, 0];
console.log(negativeToPositive(nums));

function negativeToPositive(arr) {
let temp = 0;
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
if (arr[i] < arr[j]) {
temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
return arr;
}
