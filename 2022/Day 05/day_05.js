/*
const fs = require("fs");

const readElfPairData = (path) => {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch (err) {
    console.error(err);
    return "";
  }
};

const input = readElfPairData(__dirname + `\\day_05_sample`);

const isNumericLine = (line) => line.replace(/[0-9 ]/g, "") === "";

// break input into two parts
const splitInput = (input) => {
  const lines = input.trim().split("\r\n");

  const breakIndex = lines.findIndex(isNumericLine);

  return {
    heading: lines.slice(0, breakIndex + 1),
    instructions: lines.slice(breakIndex + 2),
  };
};

const { heading, instructions } = splitInput(input);

console.log("Heading:", heading);
console.log("Instructions:", instructions);

// parse heading into data structure
const line = " 1   2   3   4   5   6   7   8   9   10 ";

const lastNumber = line.trim().split(" ").filter(Boolean).pop();
console.log(lastNumber);

console.log("[D]    ".trim().length);

// format instructions Input
const moveInstructions = instructions.map((el) => {
  return el.replace(/move |from |to /g, "").split(" ");
});
console.log(moveInstructions);

const stacksInput = `
    [P]                 [C] [C]    
    [W]         [B]     [G] [V] [V]
    [V]         [T] [Z] [J] [T] [S]
    [D] [L]     [Q] [F] [Z] [W] [R]
    [C] [N] [R] [H] [L] [Q] [F] [G]
[F] [M] [Z] [H] [G] [W] [L] [R] [H]
[R] [H] [M] [C] [P] [C] [V] [N] [W]
[W] [T] [P] [J] [C] [G] [W] [P] [J]
1   2   3   4   5   6   7   8   9 
`;


*/

// Parse the stacks from the initial configuration

// const input = `    [P]                 [C] [C]
//     [W]         [B]     [G] [V] [V]
//     [V]         [T] [Z] [J] [T] [S]
//     [D] [L]     [Q] [F] [Z] [W] [R]
//     [C] [N] [R] [H] [L] [Q] [F] [G]
// [F] [M] [Z] [H] [G] [W] [L] [R] [H]
// [R] [H] [M] [C] [P] [C] [V] [N] [W]
// [W] [T] [P] [J] [C] [G] [W] [P] [J]
// 1   2   3   4   5   6   7   8   9 `;

// function transformInput(input) {
//   const lines = input.split("\n");
//   let newStack = [];
//   // console.log(lines);
//   for (let i = lines.length - 1; i >= 0; i--) {
//     const spaceLine = " " + lines[i];
//     const newSpaceLine = spaceLine
//       .replaceAll("    ", " [-]")
//       .split(" ")
//       .filter(Boolean);
//     console.log(newSpaceLine);

//     const innerStack = [];
//     for (let j = 0; j < newSpaceLine.length; j++) {
//       if (newSpaceLine[j] != "[-]") {
//         // innerStack[j].push(newSpaceLine[j]);
//         // newStack[0][j].push(newSpaceLine[j]);
//         console.log(newStack[0]);
//       }
//     }
//     newStack.push(innerStack);
//   }
//   console.log(newStack);
// }

// transformInput(input);

const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 `;

const lines = input.split("\n").slice(0, -1).reverse();

const stack = [];

for (const line of lines) {
  const spaceLine = " " + line;

  const newSpaceLine = spaceLine
    .replaceAll("    ", " [-]")
    .split(" ")
    .filter(Boolean);
  // console.log(newSpaceLine);

  newSpaceLine.forEach((crate, index) => {
    const letter = crate.substring(1, crate.length - 1);
    if (!stack[index]) stack[index] = [];
    if (letter != "-") stack[index].push(letter);
  });
}

console.log(stack);
