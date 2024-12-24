import { parseToTable } from "../utils";

export function solve1(input: string): number {
  const table = parseToTable(input);

  return Math.max(...table.flat());
}

export function solve2(input: string): number {
  return solve1(input);
}

