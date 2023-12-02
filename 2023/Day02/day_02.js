/*
=============================
--- Day 2: Cube Conundrum ---
=============================

by Marc Abillama
https://github.com/mabillama
*/

// --- Part One ---

const fs = require("fs");

let sampleInput;
try {
  sampleInput = fs.readFileSync(__dirname + "/day_02_input", "utf8");
} catch (err) {
  console.error(err);
}

const sample = `Game 59: 7 red, 11 blue, 17 green; 5 red, 4 green, 7 blue; 8 red, 6 blue, 17 green; 16 green, 7 red, 6 blue; 5 blue, 12 green, 9 red; 7 blue, 3 red, 9 green
Game 60: 4 red, 5 green, 4 blue; 15 green, 4 red, 18 blue; 6 blue, 1 red, 1 green; 14 blue, 12 green, 1 red; 2 green, 5 red, 4 blue; 2 green, 1 blue, 5 red
Game 61: 3 green, 2 blue; 4 green, 6 blue; 2 red, 12 green, 11 blue; 1 red, 9 green, 7 blue; 2 red, 11 green, 19 blue; 9 blue, 1 red, 2 green
Game 62: 17 green; 3 blue, 14 red, 14 green; 17 red, 16 green, 5 blue; 17 green, 5 blue, 1 red; 4 blue, 17 red, 13 green`;

// parsing the smallest entry

function parseUnit(input) {
  const inputParts = input.split(" ");
  const value = +inputParts[0];
  const color = inputParts[1];

  const result = {};
  result[color] = value;

  return result;
}

function parseRound(input) {
  const inputParts = input.split(", ");
  let result = [];

  for (part of inputParts) {
    const parsed = parseUnit(part);
    result.push(parsed);
  }

  return result;
}

function parseGame(input) {
  const blabla = input.split(": ");
  const gameNumber = blabla[0].match(/\d+/);
  const partsGame = blabla[1].split("; ");
  let result = [];

  for (part of partsGame) {
    const parsed = parseRound(part);
    result.push(parsed);
  }

  const flatResult = result.flat();
  const finalResult = [{ game: +gameNumber[0] }, [...flatResult]];

  return finalResult;
}

// test game

const reference = {
  red: 12,
  green: 13,
  blue: 14,
};

function testGame(game) {
  game[1].forEach((element) => {
    for (const key in element) {
      if (element[key] > reference[key]) {
        game[0].game = 0;
      }
    }
  });

  return game;
}

console.log(
  sampleInput
    .split("\n")
    .map((el) => parseGame(el))
    .map((el) => testGame(el))
);

console.log(
  sampleInput
    .split("\n")
    .map((el) => parseGame(el))
    .map((el) => testGame(el))
    .reduce((acc, item) => acc + item[0].game, 0)
);
