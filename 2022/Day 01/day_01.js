const fs = require("fs");

let sampleInput = "";

try {
  sampleInput = fs.readFileSync(__dirname + "/day_01_input", "utf8");
} catch (err) {
  console.error(err);
}

// Part 1

// Parse the input to get the groups of snacks
const arrSampleInput = sampleInput.split("\r\n\r");

// Create function that will transform the array element into the sum of calories
const sumOfGroup = (group) =>
  group
    .split("\n")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

// Apply it to the sample input
const sumedGroupsArr = arrSampleInput.map(sumOfGroup);

// Finaly, find the higher amount of calories being transported
const caloricElf = Math.max(...sumedGroupsArr);
console.log(caloricElf);

// Part 2

// Getting the top 3 caloric elves and their total calories load

// Sort the array in descending order. New array due to mutation
const descGroupArr = [...sumedGroupsArr].sort((a, b) => b - a);

// Grab the top 3 heavy elfs...
const threeHeavyElfs = descGroupArr.slice(0, 3);

// ...and their calories
const andTheirCalories = threeHeavyElfs.reduce((acc, curr) => acc + curr, 0);

console.log(threeHeavyElfs);
console.log(andTheirCalories);
