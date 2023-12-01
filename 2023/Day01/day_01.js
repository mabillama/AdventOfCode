/*
==========================
--- Day 1: Trebuchet?! ---
==========================

by Marc Abillama
https://github.com/mabillama
*/

// --- Part One ---
const fs = require("fs");

let sampleInput;
try {
  sampleInput = fs.readFileSync(__dirname + "/day_01_input", "utf8");
} catch (err) {
  console.error(err);
}

const input = sampleInput;

const extractAndCalculate = (input) => {
  const digits = input.match(/\d/g) || [];
  const firstDigit = parseInt(digits[0]) || 0;
  const lastDigit = parseInt(digits[digits.length - 1]) || 0;
  return firstDigit * 10 + lastDigit;
};

const sumCalibrationValues = (input) =>
  input
    .split("\n")
    .map(extractAndCalculate)
    .reduce((sum, value) => sum + value, 0);

const result = sumCalibrationValues(sampleInput);

console.log(result);

// --- Part Two ---

const spelledNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const numbersRegex = new RegExp(
  "(?=(" + Object.keys(spelledNumbers).join("|") + "|\\d))",
  "g"
);

console.log(
  input
    .split("\n")
    .map((el) =>
      [...el.matchAll(numbersRegex)].map(
        (el) => spelledNumbers[el[1]] ?? +el[1]
      )
    )
    .map((el) => el[0] * 10 + el[el.length - 1])
    .reduce((acc, value) => acc + value, 0)
);
