import { parseSingleDigitTable } from "../utils";

const checkVector = (
  table: string[][],
  x: number,
  y: number,
  vector: [number, number]
): boolean => {
  let check = true;
  ["X", "M", "A", "S"].forEach((letter, index) => {
    const newX = x + vector[0] * index;
    const newY = y + vector[1] * index;
    // Check if the new position is out of bounds
    if (
      newX < 0 ||
      newX >= table.length ||
      newY < 0 ||
      newY >= table[newX].length
    ) {
      check = false;
      return;
    }
    // Check if the letter is the same as the letter in the table
    if (table[newX][newY] !== letter) {
      check = false;
      return;
    }
  });
  return check;
};

const findXmas = (table: string[][], x: number, y: number): number => {
  let xmas = 0;
  [-1, 0, 1].forEach((xVector) => {
    [-1, 0, 1].forEach((yVector) => {
      if (
        (xVector !== 0 || yVector !== 0) &&
        checkVector(table, x, y, [xVector, yVector])
      ) {
        xmas += 1;
      }
    });
  });
  return xmas;
};

export function solve1(input: string): number {
  const table = parseSingleDigitTable(input);
  let xmas = 0;
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (table[i][j] === "X") {
        xmas += findXmas(table, i, j);
      }
    }
  }
  return xmas;
}

const solutions = ["MMSS", "SSMM", "MSSM", "SMMS"];
const checkMS = (table: string[][], x: number, y: number): boolean => {
  const str =
    table[x - 1][y - 1] +
    table[x + 1][y - 1] +
    table[x + 1][y + 1] +
    table[x - 1][y + 1];

  return solutions.includes(str);
};

export function solve2(input: string): number {
  const table = parseSingleDigitTable(input);
  let xmas = 0;
  for (let i = 1; i < table.length - 1; i++) {
    for (let j = 1; j < table[i].length - 1; j++) {
      if (table[i][j] === "A" && checkMS(table, i, j)) {
        xmas += 1;
      }
    }
  }
  return xmas;
}

