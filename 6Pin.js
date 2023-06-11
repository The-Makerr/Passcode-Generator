const itertools = require('itertools');

function generateCombinations() {
  const combinations = [];
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  const combos = itertools.permutations(numbers, 6);
  combinations.push(...combos);

  return combinations;
}

// Example usage:
const combinations = generateCombinations();
for (const combo of combinations) {
  console.log(combo);
}
