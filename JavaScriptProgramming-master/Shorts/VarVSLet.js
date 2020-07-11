var str = "Hello";  // in var variable name can be duplicated
var str = "Batch 12"
console.log(str ); // Batch 12
                   // Hello   


let str2 = "Hello"
// let str2 = "Cybertek"   // Identifier 'str2' has already been declared  // variable name must be unique
console.log(str2);


if(true){
    let totalNumber = 100;
}


//console.log(totalNumber);  // totalNumber is not defined  // is a local variable with let you can create local variable


if(true){
    var totalNumber = 100;
}

console.log(totalNumber);  // 100 you can use var variable in outsite of the block


const password = 1000;
// password = 2000;   // Assignment to constant variable.  const variables cannot be reassigned
console.log(password);  // 1000 



console.log("===========================");
if(10 > 8){
    let sum = 1;  // we cannot call local (let )variable outside of the block
}
//console.log(sum);

if(45 < 50){
    var sum2 = 50;
}
console.log(sum2);