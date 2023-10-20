const fs = require("fs");

const readElfPairData = (path) => {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch (err) {
    console.error(err);
    return "";
  }
};

const parsePairs = (input) => {
  return input
    .split("\r\n")
    .map((entry) =>
      entry.split(",").flatMap((range) => range.split("-").map(Number))
    );
};

const isRangeContained = ([a, b, x, y]) =>
  (a <= x && b >= y) || (x <= a && y >= b);

const input = readElfPairData(__dirname + `\\day_04_input`);
const parsedInput = parsePairs(input);
const totalPairsContained = parsedInput.filter(isRangeContained).length;

console.log(totalPairsContained);

// Part 2

const doOverlap = ([a, b, x, y]) => (a <= x && b >= x) || (x <= a && y >= a);

const totalPairsOverlapped = parsedInput.filter(doOverlap).length;

console.log(totalPairsOverlapped);

/*
const isRangeContained = (mapInt) => {
  const [a, b] = [mapInt[0], mapInt[1]];
  const [x, y] = [mapInt[2], mapInt[3]];
  return (a <= x && b >= y) || (x <= a && y >= b);
  
  // if (mapInt[0] <= mapInt[2] && mapInt[1] >= mapInt[3]) {
  //   return 1;
  // } else if (mapInt[2] <= mapInt[0] && mapInt[3] >= mapInt[1]) {
  //   return 1;
  // } else {
  //   return 0;
  // }
};
*/
/*
const doOverlap = (mapInt) => {
  const [a, b] = [mapInt[0], mapInt[1]];
  const [x, y] = [mapInt[2], mapInt[3]];
  return (a <= x && b >= x) || (x <= a && y >= a);
};
*/
/*
const totalPairsContained = input
  .split("\r\n")
  .map((entry) =>
    entry.split(",").flatMap((range) => range.split("-").map(Number))
  )
  .map((el) => isRangeContained(el))
  .reduce((acc, val) => acc + val, 0);
*/
/*
const totalPairsOverlapped = input
  .split("\r\n")
  .map((entry) =>
    entry.split(",").flatMap((range) => range.split("-").map(Number))
  )
  .map((el) => doOverlap(el))
  .reduce((acc, val) => acc + val, 0);
*/
