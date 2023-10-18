const fs = require("fs");

let data = "";

try {
  data = fs.readFileSync(__dirname + "/day_02_input", "utf8");
} catch (err) {
  console.error(err);
}

// console.log(data);

const groupData = data.split("\r\n");

let totalPoints = 0;

groupData.forEach((el) => {
  if (el === "A Y") totalPoints += 2 + 6;
  else if (el === "A X") totalPoints += 1 + 3;
  else if (el === "A Z") totalPoints += 3;
  else if (el === "B Y") totalPoints += 2 + 3;
  else if (el === "B X") totalPoints += 1;
  else if (el === "B Z") totalPoints += 3 + 6;
  else if (el === "C Y") totalPoints += 2;
  else if (el === "C X") totalPoints += 1 + 6;
  else if (el === "C Z") totalPoints += 3 + 3;
});

// console.log(groupData);
console.log(totalPoints);

// Part 2

totalPoints = 0;
groupData.forEach((el) => {
  if (el === "A Y") totalPoints += 1 + 3; // ok
  else if (el === "A X") totalPoints += 3 + 0; // ok
  else if (el === "A Z") totalPoints += 2 + 6; // ok
  else if (el === "B Y") totalPoints += 2 + 3; // ok
  else if (el === "B X") totalPoints += 1 + 0; // ok
  else if (el === "B Z") totalPoints += 3 + 6; // ok
  else if (el === "C Y") totalPoints += 3 + 3; // ok
  else if (el === "C X") totalPoints += 2 + 0; // ok
  else if (el === "C Z") totalPoints += 1 + 6; // ok
});
console.log(totalPoints);
