

let length = prompt("Enter the length of the room.");
length = parseInt(length);
let width = prompt("Enter the width of the room.");
width = parseInt(width);
let cost = prompt("Enter the cost per square foot.");
cost = parseInt(cost);

let sqft = length*width;
let total = sqft*cost;

console.log(" ");
console.log("The room is " + sqft + " square feet.");
console.log("At $" + cost + " per sq. ft., it will cost $" +total+ " to tile it." );