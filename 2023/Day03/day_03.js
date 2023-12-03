/*
==========================
--- Day 3: Gear Ratios ---
==========================

by Marc Abillama
https://github.com/mabillama
*/

// --- Part One ---
const fs = require("fs");

let sample;
try {
  sample = fs.readFileSync(__dirname + "/day_03_input", "utf8");
} catch (err) {
  console.error(err);
}

// A function to find and stock the cool symbols
function findSymbols(schematic) {
  const symbolsRegex = /[@#$%*&/+\\=+-]/g;
  let symbolsStock = [];

  schematic.split(/\r?\n/).forEach((line, y) => {
    [...line.matchAll(symbolsRegex)].forEach((match) => {
      symbolsStock.push([y, match.index]); // Stocking the symbols with coordinates
    });
  });

  return symbolsStock;
}

// A function to track down those elusive number chains
function findNumberChains(schematic) {
  const numberChainRegex = /\d+/g;
  let numberChains = [];

  schematic.split(/\r?\n/).forEach((line, y) => {
    [...line.matchAll(numberChainRegex)].forEach((match) => {
      numberChains.push([
        y,
        match.index,
        match.index + match[0].length - 1,
        parseInt(match[0]),
      ]);
    });
  });

  return numberChains;
}

// A function to see if number chains have any symbol buddies
function findNeighborChains(numberChains, symbolsStock) {
  let hasNeighbor = new Array(numberChains.length).fill(false);

  numberChains.forEach((chain, chainIndex) => {
    const [line, start, end] = chain;

    symbolsStock.forEach(([refLine, refIndex]) => {
      if (
        (refLine === line &&
          (refIndex === start - 1 || refIndex === end + 1)) ||
        (refLine === line - 1 &&
          refIndex >= start - 1 &&
          refIndex <= end + 1) ||
        (refLine === line + 1 && refIndex >= start - 1 && refIndex <= end + 1)
      ) {
        hasNeighbor[chainIndex] = true;
      }
    });
  });

  return numberChains.filter((_, index) => hasNeighbor[index]);
}

// Function to sum up all the valuable part numbers
function sumPartNumbers(neighborChains) {
  return neighborChains.reduce((sum, chain) => sum + chain[3], 0);
}

// Using the functions
let symbolsStock = findSymbols(sample);
let numberChains = findNumberChains(sample);
let neighborChains = findNeighborChains(numberChains, symbolsStock);
let totalSum = sumPartNumbers(neighborChains);

console.log(`PART 1 - Total sum of all part numbers for: ${totalSum}`);
