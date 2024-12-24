import * as fs from "fs-extra";
import * as path from "path";

const day = process.argv[2]; // Get the day from the command line arguments

// Ensure the day argument is passed
if (!day) {
  console.error("Please provide a day number (e.g., npm run new 01)");
  process.exit(1);
}

// Define paths
const srcDir = path.join(__dirname, "../src/example");
const testFile = path.join(__dirname, "../tests/example.test.ts");
const daySrcDir = path.join(__dirname, `../src/day${day}`);
const dayTestFile = path.join(__dirname, `../tests/day${day}.test.ts`);

// Copy the src/example folder to src/dayXX
fs.copy(srcDir, daySrcDir, (err) => {
  if (err) {
    console.error("Error copying src/example:", err);
    process.exit(1);
  } else {
    console.log(`Copied src/example to src/day${day}`);
  }
});

// Copy the test file from tests/example.test.ts to tests/dayXX.test.ts
fs.copyFile(testFile, dayTestFile, (err) => {
  if (err) {
    console.error("Error copying test file:", err);
    process.exit(1);
  } else {
    console.log(`Copied tests/example.test.ts to tests/day${day}.test.ts`);

    // Replace the import path in the new test file
    const oldImportPath = `import { solve1, solve2 } from "../src/example";`;
    const newImportPath = `import { solve1, solve2 } from "../src/day${day}";`;

    // Read the test file, replace the import, and write it back
    fs.readFile(dayTestFile, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading the test file:", err);
        process.exit(1);
      }

      const updatedData = data.replace(oldImportPath, newImportPath);

      fs.writeFile(dayTestFile, updatedData, "utf-8", (err) => {
        if (err) {
          console.error("Error writing the updated test file:", err);
          process.exit(1);
        } else {
          console.log(
            `Updated import in tests/day${day}.test.ts to point to src/day${day}`
          );
        }
      });
    });
  }
});

