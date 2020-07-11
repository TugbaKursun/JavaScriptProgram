//set accept only unique characters
var set = new Set();

set.add("Ayse");
set.add("Tugba");
set.add("Husniye");
set.add("Aysegul");
set.add("Tugba");
set.add('$');
set.add(23);

console.log(set);

set.delete("Aysegul");
console.log(set);

//herbir value yu print edelim
for(let each of set.values()){
    console.log(each);
}

console.log(set.has("Aysegul"));
console.log(set.has("Tugba"));
console.log(set.keys());
console.log(set.size);
console.log(set.entries());

console.log(set.clear());
console.log(set);


//practice
//unique chars 
//solution1
function nonDup(str){
    return new Set(str);
}

console.log(nonDup("AAAABBBBCCCCDDDGHH"));
console.log(nonDup2("AAAABBBBCCCCDDDGHH"));
//solution2
function nonDup2(str){
    let set = new Set(str);
    let nonDup = "";
    for(let each of set.values()){
nonDup += each;
    }
    return nonDup;
}

///*7.Write a removeAll() takes two parameters:
//an ArrayList of Strings called wordList, and
//a String called targetWord.So remove the targetWord from ArrayList.
//EX :ArrayList("hi","hey","hi","yo")); ----> removeAll(wordList,"hi"); --->["hey","yo"]*/

function removeAll(list,str){
    let set = new Set(list);

    for(let each of set.values()){
        if(each== str){
            set.delete(each);
        }
    }
    return set;
}

console.log(removeAll(["hi","hey","hi","yo"],'hi'));

