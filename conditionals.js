//const raining = true ;
//const cold = false ;


//#1 example of IF
/*if (raining){
  console.log("Don't forget your umbrella!");
}

if (cold){
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside");
*/

//#2 example of IF
/*
if (cold){
  console.log("Make sure you pick out a scarf!");
} else { 
  console.log("Short sleeves are fine.");
}
*/


//#3 temperature 
/*

const temperature = -16;

if (temperature < 0){
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

*/


//#4 voting system
/*
const isCitizen = true;
const age = 36;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
*/

// #5 extreme temp
/*
let temperature = 51;
if (temperature < -45 || temperature > 45) {
  console.log("Maybe going outside isn't such a great idea…");
}
*/

// #6 raining not

let raining = false;

if (!raining) {
  console.log("Leave your umbrella at home!");
} else {
  console.log("Take your umbrella with you");
}
