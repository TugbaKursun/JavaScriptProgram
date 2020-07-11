let str = 'AAAABBBBCCCCDEF';
let unique = "";

for(let i = 0; i < str.length; i++){
    if(!unique.includes(str.charAt(i))){
        unique += str.charAt(i);
    }
}
console.log("Unique characters are : " + unique);

let count = 0;
while(count < 5){
    console.log("Life is great!");
    count++;
}

do{
console.log("Aysegul abla loves money. She wants $dollars, euros, and tls");
}while(6 > 8);


let i = 0;
for(each in str){
    console.log(str[each]);
}

let nonDublucates = "";
for(let each of str){
    if(!nonDublucates.includes(each)){
        nonDublucates += each;
    }
}

console.log("Unique values: " + nonDublucates);