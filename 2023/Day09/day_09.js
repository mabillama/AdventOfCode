function findNextNumbers(sequences) {
  function generateDifferences(sequence) {
    let differences = [];
    for (let i = 0; i < sequence.length - 1; i++) {
      differences.push(sequence[i + 1] - sequence[i]);
    }
    return differences;
  }

  function extrapolateNextNumber(differenceSequences) {
    let lastSequence = differenceSequences[differenceSequences.length - 1];
    let nextNumber = lastSequence[0];
    for (let i = differenceSequences.length - 2; i >= 0; i--) {
      nextNumber += differenceSequences[i][differenceSequences[i].length - 1];
    }
    return nextNumber;
  }

  function calculateNextNumber(sequence) {
    let differences = generateDifferences(sequence);
    let differenceSequences = [differences];
    while (!differences.every((v) => v === 0)) {
      differences = generateDifferences(differences);
      differenceSequences.push(differences);
    }
    return (
      sequence[sequence.length - 1] + extrapolateNextNumber(differenceSequences)
    );
  }

  return sequences.reduce(
    (sum, sequence) => sum + calculateNextNumber(sequence),
    0
  );
}

function parseInput(input) {
  return input.split("\n").map((line) => line.split(" ").map(Number));
}

const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const sequences = parseInput(input);

console.log(findNextNumbers(sequences));

function findPreviousNumbers(sequences) {
  function generateDifferences(sequence) {
    let differences = [];
    for (let i = 0; i < sequence.length - 1; i++) {
      differences.push(sequence[i + 1] - sequence[i]);
    }
    return differences;
  }

  function extrapolatePreviousNumber(differenceSequences) {
    let previousNumber = differenceSequences[0][0];
    for (let i = 1; i < differenceSequences.length; i++) {
      previousNumber = differenceSequences[i][0] - previousNumber;
    }
    return previousNumber;
  }

  function calculatePreviousNumber(sequence) {
    let differences = generateDifferences(sequence);
    let differenceSequences = [differences];
    while (!differences.every((v) => v === 0)) {
      differences = generateDifferences(differences);
      differenceSequences.unshift(differences);
    }
    differenceSequences.unshift(
      new Array(differenceSequences[0].length).fill(0)
    );
    return sequence[0] - extrapolatePreviousNumber(differenceSequences);
  }

  return sequences.reduce(
    (sum, sequence) => sum + calculatePreviousNumber(sequence),
    0
  );
}

console.log(findPreviousNumbers(sequences));
