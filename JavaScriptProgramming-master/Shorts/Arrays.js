/*
declaration of array:
    var variableName = [data1, data2.....];


*/

var names = ["Muhtar", "Ayse", "Mahriban", "Aysegul"];
//index:      0          1        2           3

console.log(names); //[ 'Muhtar', 'Ayse', 'Mahriban', 'Aysegul' ]
console.log(names[1]);  // Ayse

console.log(names[4]);  //undefined

/*
sort()
push(value): adds the value to the array
pop(): Last in first out
shift():First in first out
unshift(Value): inserts the given value to the index 0
length: returns the length of array
*/

var numbersArray = [9,8,7,6,5,4,3];
console.log(numbersArray);  // [ 9, 8, 7, 6,5, 4, 3]

numbersArray.sort();  // sorts in acsending order

console.log(numbersArray); // [3, 4, 5, 6, 7, 8, 9]

var nums = [1,2];
nums.push(4);

console.log(nums);  // [ 1, 2, 4 ]

var nums2 = [5,6,7,8];
var n = nums2.pop();  

console.log(n);  // 8
console.log(nums2); //[ 5, 6, 7 ]

var arr1 = ["A", "B", "C", "D"];
var str1 = arr1.shift();  
console.log(str1);  //A
console.log(arr1); //[ 'B', 'C', 'D' ]

var arr2 = [9,10,11];
arr2.unshift(8);
console.log(arr2);  //[ 8, 9, 10, 11 ]


console.log(arr2.length);  //4

console.log("=================================");

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//console.log(numbers.sort()); // not sorted

numbers.push(16);
console.log(numbers);

numbers.shift();
console.log(numbers);  // removes the first index value

numbers.unshift(35);
console.log(numbers);

numbers.sort();
console.log(numbers);

if(numbers.includes(35)){
    console.log("number 35 is exist");
}else{
    console.log("The number is not exist");
}

numbers.shift();
console.log(numbers);

numbers.pop();
console.log(numbers);

var arr = [1,1,5,7,10,12,13,5,11,12,7];
 var unique = [];
 for(var i = 0; i < arr.length; i++){
     if(unique.indexOf(arr[i]) === -1){
         unique.push(arr[i]);
     }
 }


console.log(unique);  // does not work


var list = ["elma", "armut", "karpuz" , "muz" ,"nar"];

// if a word contains both a and u then will return a new array of these words

console.log(containsLetters(list));


function containsLetters(arr) {
    let list = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes("a") & arr[i].includes("u")){
            list.push(arr[i]);
        }
       
    }
    return list
}


