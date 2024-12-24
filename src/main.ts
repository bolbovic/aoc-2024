import fs from "fs";
import path from "path";

// Dynamically import the solve1 and solve2 functions for a specific day
async function getSolvers(day: string) {
  const solvePath = path.resolve(__dirname, `day${day}/index`);
  try {
    const { solve1, solve2 } = await import(solvePath);
    if (typeof solve1 !== "function" || typeof solve2 !== "function") {
      throw new Error(
        `solve1 and solve2 must be functions in day${day}/index.ts`
      );
    }
    return { solve1, solve2 };
  } catch (error: any) {
    throw new Error(`Could not load day ${day}: ${error.message}`);
  }
}

// Read input from file
function readInput(day: string): string {
  const inputPath = path.resolve(__dirname, `day${day}/input.txt`);
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Could not find input.txt for day ${day}`);
  }
  return fs.readFileSync(inputPath, "utf-8").trim();
}

// Function to measure execution time
function measureExecutionTime(
  fn: (input: string) => any,
  input: string,
  part: number
): void {
  const start = performance.now();
  const result = fn(input);
  const end = performance.now();
  const timeTaken = (end - start).toFixed(2); // Time in milliseconds, rounded to 2 decimal places
  console.log(`Part ${part} result:`, result);
  console.log(`Part ${part} execution time: ${timeTaken}ms`);
}

// Main function
async function main() {
  const day = process.argv[2];
  if (!day) {
    console.error("Please specify a day, e.g., npm run day -- 01");
    process.exit(1);
  }

  const { solve1, solve2 } = await getSolvers(day);
  const input = readInput(day);

  console.log(`Results for Day ${day}:`);
  measureExecutionTime(solve1, input, 1);
  measureExecutionTime(solve2, input, 2);
}

main().catch((error) => console.error(error.message));

