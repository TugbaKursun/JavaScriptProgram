let grade = 89;
if(grade <= 100){
if(grade >= 90 && grade <= 100){
console.log('Your grade is A');
}else if(grade >= 80 && grade < 90 ){
console.log('Your grade is B');
}else if(grade >= 70 && grade < 80){
console.log('Your grade is C');
}else if(grade >= 60 && grade < 70){
console.log('Your grade is D');
}else{
console.log('Your grade is F');
}
}else{
console.log('Invalid grade!');
}

let grade1 = 87;
let result = "";
if(grade1 <= 100){
result = (grade >= 90 && grade <= 100)? 'Your grade is A':
(grade >= 80 && grade < 90 )? 'Your grade is B':
(grade >= 70 && grade < 80)? 'Your grade is C':
(grade >= 60 && grade < 70)? 'Your grade is D':
'Your grade is F';
}else{
console.log('Invalid grade!');
}
console.log(result);


let light = 'Red';
switch(light){
case 'Yellow':
console.log('Be ready to fly!:)');
break;
case 'Green':
console.log('Bas gaza kim tutar seni!!');
break;
case 'Red':
console.log('Stop and Wait!');
break;
default:
console.log('Do not be a traffic monstor');
}