import { parseToTable, splitColumns } from "../utils";

export function solve1(input: string): number {
  const table = parseToTable(input);

  const [col1, col2] = splitColumns(table);

  const sortedCol1 = col1.sort((a, b) => a - b);
  const sortedCol2 = col2.sort((a, b) => a - b);

  const result = sortedCol1.reduce((sum, num, index) => {
    return sum + Math.abs(sortedCol2[index] - num);
  }, 0);

  return result;
}

export function solve2(input: string): number {
  const table = parseToTable(input);

  const [col1, col2] = splitColumns(table);

  const hash2 = col2.reduce((acc: Record<number, number>, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const result = col1.reduce((sum, num) => {
    return sum + num * (hash2[num] ?? 0);
  }, 0);

  return result;
}

