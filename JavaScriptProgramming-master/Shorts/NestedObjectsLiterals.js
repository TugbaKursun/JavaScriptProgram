 var myCars = {
     BMW:{
     year: 2020,
     model: "X5",
     madeIn: "Germany"
     },
     Toyota: {
         year:2018,
         model:"Corolla",
         madeIn:"Japan"
     },
     Mercedes:{
         year:2016,
         model:"C class",
         madeIn: "China"
     }


 };

 

 /*
 {
  BMW: { year: 2020, model: 'X5', madeIn: 'Germany' },
  Toyota: { year: 2018, model: 'Corolla', madeIn: 'Japan' },
  Mercedes: { year: 2016, model: 'C class', madeIn: 'China' }
}
*/
 console.log(myCars);
 

 console.log(myCars.BMW.model); // X5
 console.log(myCars["BMW"]);  // { year: 2020, model: 'X5', madeIn: 'Germany' }
 console.log(myCars["BMW"]["model"]); //X5

console.log("==================================");

/*
{ year: 2020, model: 'X5', madeIn: 'Germany' }
{ year: 2018, model: 'Corolla', madeIn: 'Japan' }
{ year: 2016, model: 'C class', madeIn: 'China' }
*/
for(eachCar in myCars){
    console.log(myCars[eachCar]);
}

var yearOfToyota = myCars.Toyota.year;
console.log(yearOfToyota);  //2018

console.log(myCars["Toyota"]["year"]);// 2018



console.log("==================================");

//copy objects
var oldCars = JSON.parse(JSON.stringify(myCars));  // JSON is a interface
/*
{
  BMW: { year: 2020, model: 'X5', madeIn: 'Germany' },
  Toyota: { year: 2018, model: 'Corolla', madeIn: 'Japan' },
  Mercedes: { year: 2016, model: 'C class', madeIn: 'China' }
}
*/
console.log(oldCars);


console.log("==========================");
var fruit = {
    Apple:{
    color: "red",
    size : "medium",
    price: 2.5,
    season : "summer"
    },
    Banana:{
        color: "yellow",
        size : "medium",
        price: 1.5,
        season : "summer"
    },
    Pear:{
        color: "light green",
        size : "small",
        price: 3.5,
        season : "summer"
    }
};

console.log(fruit);
console.log(fruit.Banana);
console.log(fruit["Banana"]);
console.log(fruit.Banana.color);
console.log(fruit["Banana"]["color"]);

var seasonOfThePear = fruit.Pear.season;
console.log(seasonOfThePear);

var priceOfApple = fruit["Apple"]["price"];
console.log(priceOfApple);