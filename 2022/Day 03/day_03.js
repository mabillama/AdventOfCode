const fs = require("fs");

const readRucksacksData = (path) => {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch (err) {
    console.error(err);
    return "";
  }
};

const getItemsFromFirstCompartment = (rucksackContents) =>
  rucksackContents.slice(0, rucksackContents.length / 2).split("");

const findCommonItemType = (arr, rucksackContents) => {
  const secondCompartment = rucksackContents.slice(rucksackContents.length / 2);
  return [...secondCompartment].find((c) => arr.includes(c)) || "";
};

const getItemTypePriority = (itemType) => {
  if (itemType.toLowerCase() === itemType) return itemType.charCodeAt(0) - 96;
  return itemType.charCodeAt(0) - 38;
};

const calculateTotalPriority = (allRucksacksData) =>
  allRucksacksData
    .split("\r\n")
    .map((contents) =>
      findCommonItemType(getItemsFromFirstCompartment(contents), contents)
    )
    .map(getItemTypePriority)
    .reduce((acc, val) => acc + val, 0);

const allRucksacksData = readRucksacksData(`${__dirname}/day_03_input`);
console.log(calculateTotalPriority(allRucksacksData));

// Part 2

const findCommonCharacterAmongThree = (strings) =>
  [...strings[0]].find(
    (char) => strings[1].includes(char) && strings[2].includes(char)
  );

const chunkInThrees = (inputString) => {
  return Array.from(
    { length: Math.ceil(inputString.split("\n").length / 3) },
    (_, i) => inputString.split("\n").slice(i * 3, i * 3 + 3)
  );
};
const totalPriority = chunkInThrees(allRucksacksData)
  .map(findCommonCharacterAmongThree)
  .map(getItemTypePriority)
  .reduce((acc, priority) => acc + priority, 0);

console.log(totalPriority);
