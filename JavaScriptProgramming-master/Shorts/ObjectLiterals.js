var car = {
    Make: "BMW",
    Model: "X5",
    Year : 2019,
    Price: 50000
};
console.log("===================================");
var fruit = {
    color :"red",
    season: "summer",
    price : 3,
    size : "medium",
    car : car


};

console.log(fruit);
console.log(fruit.color); // red
console.log(fruit["color"]); // red
console.log(fruit.season); // summer
console.log(fruit["season"]);// summer

console.log(fruit.car);
console.log(fruit[car]);  //undefined
console.log(fruit.car.Make);
console.log(fruit.car["Model"]);
console.log(fruit.car.car); //undefined


console.log('fruit :', fruit.size); //fruit : medium

console.log("=============================");
console.log(car);  // { Make: 'BMW', Model: 'X5', Year: 2019, Price: 50000 }

var brandOfCar = car.Make;
console.log(brandOfCar);  //BMW

console.log(car["Make"]); //BMW

console.log(car.Model);     //X5
console.log(car["Model"]);  //X5

console.log("===========================");

for(each in car){
    console.log(each); // Make  Model Year  Price
}


for(each in car){
    console.log(car[each]);  // BMW  X5  2019  50000
    
}

console.log("==============================");
/*
Make : BMW
Model : X5
Year : 2019
Price : 50000
*/
for(each in car){
    console.log(each +" : " + car[each]);  
    
}