var dessertType = require("../TestData/Desserts.json");
console.log(dessertType.Baklava);
console.log("Baklava's price is " + dessertType.Baklava.price);

console.log(dessertType.Kadayif);
console.log("Kadayif's price is " + dessertType.Kadayif.calaori);

console.log(dessertType.Sutlac);
console.log("Sutlac's price is " + dessertType.Baklava.chef);

console.log(dessertType["Kadayif"]["chef"]);
