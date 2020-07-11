function splitWord(str) {
    let arr = str.split("");
    console.log(arr);
}

function findMax(arr) {
    let max = 0;
    for(let i of arr){
        if(i > max){
            max = i;
        }
    }
    return max;
    
}

let word = "University";
splitWord(word);

let arr = [20, 13, 34, 56, 38, 66, 197];
console.log('Maximum number is : ' + findMax(arr));
