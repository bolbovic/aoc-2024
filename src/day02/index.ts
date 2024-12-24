import { parseToTable } from "../utils";

const testRow = (row: number[]) => {
  const direction = row[0] - row[1] > 0 ? 1 : -1;
  for (let j = 0; j < row.length - 1; j++) {
    const diff = row[j] - row[j + 1];
    if (direction * diff < 0 || diff === 0 || Math.abs(diff) > 3) {
      return false;
    }
  }
  return true;
};

export function solve1(input: string): number {
  const table = parseToTable(input);

  let safeLevels = 0;
  for (let i = 0; i < table.length; i++) {
    const row = table[i];
    if (testRow(row)) {
      safeLevels++;
    }
  }

  return safeLevels;
}

export function solve2(input: string): number {
  const table = parseToTable(input);

  let safeLevels = 0;
  for (let i = 0; i < table.length; i++) {
    const row = table[i].slice(0);
    if (testRow(row)) {
      safeLevels++;
    } else {
      for (let j = 0; j < row.length; j++) {
        const newRow = row.slice(0);
        newRow.splice(j, 1);
        if (testRow(newRow)) {
          safeLevels++;
          break;
        }
      }
    }
  }

  return safeLevels;
}

