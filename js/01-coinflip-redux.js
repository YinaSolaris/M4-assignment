let coinFlip;
do {
  coinFlip = Math.floor(Math.random() * 2); // Generates a random number 0 or 1
  if (coinFlip === 0) {
    console.log("Heads");
  } else if (coinFlip === 1) {
    console.log("Tails");
  }
} while (coinFlip !== 1); // Continue until coinFlip becomes "Tails"
