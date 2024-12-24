import fs from "fs";
import path from "path";

// Dynamically import the solve function for a specific day
async function getSolver(day: string) {
  const solvePath = path.resolve(__dirname, `day${day}/solve`);
  try {
    const { solve } = await import(solvePath);
    return solve;
  } catch (error) {
    throw new Error(`Could not find solve.ts for day ${day}`);
  }
}

// Read input from file
function readInput(day: string, part: number): string {
  const inputPath = path.resolve(__dirname, `day${day}/input${part}.txt`);
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Could not find input${part}.txt for day ${day}`);
  }
  return fs.readFileSync(inputPath, "utf-8").trim();
}

// Main function
async function main() {
  const day = process.argv[2];
  if (!day) {
    console.error("Please specify a day, e.g., npm run day -- 01");
    process.exit(1);
  }

  const solve = await getSolver(day);

  const input1 = readInput(day, 1);
  const input2 = readInput(day, 2);

  console.log(`Results for Day ${day}:`);
  console.log("Part 1:", solve(input1));
  console.log("Part 2:", solve(input2));
}

main().catch((error) => console.error(error.message));
