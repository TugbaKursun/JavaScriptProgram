function palindrom(str){
    var result = "";
    if(typeof str == "string"){
    for(var i = str.length - 1; i >= 0; i--){
        result = result.concat(str.charAt(i));
    }
  if(result == str){
      return true;
  }
}
return false;

}

console.log(palindrom("Ayse"));
console.log(palindrom("Cybertek"));
console.log(palindrom(123));



console.log("=========================");

//"AAABBBCCC" ==> "ABC"

function removeDuplicates(str){
    var nonDuplicates = "";
    if(typeof str == "string"){

        for(var i = 0; i < str.length; i++){
            if(!nonDuplicates.includes(str.charAt(i))){
                nonDuplicates = nonDuplicates.concat(str.charAt(i));
            
            }
        }

    }

    console.log(nonDuplicates);
}

removeDuplicates("AAABBBCCC");