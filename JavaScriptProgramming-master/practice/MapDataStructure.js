var employees = new Map();

employees.set("Ayse", 150000);
employees.set("Tugba",200000);
employees.set("Aysegul", 110000);
employees.set("Husniye", 100000);

console.log(employees);
for(let [key,value] of employees){
    console.log("Employee name: "+ key + "Employee salary : " + value);
}

employees.delete("Ayse");
console.log(employees);

for(let each of employees.keys()){
    console.log("Employee name : " + each);
}

for(let each of employees.values()){
    console.log("Emloyee's salary : " + each);
}

console.log(employees.has("Ayse"));
console.log(employees.has("Tugba"));
console.log(employees.get("Tugba"));


//character of frequency
function frequencyOfCharacter(str){
let set = new Set(str);
let map = new Map();
for(let i of set.values()){
    let count=0;
    for(let j = 0; j<str.length; j++){
        if(i == str.charAt(j)){
            count++;
        }
    }
   
     map.set(i,count);
    
}
return map;
}

console.log(frequencyOfCharacter("AAAABBBBCCCCDDDGHH"));