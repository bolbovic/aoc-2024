export function solve(input: string): number {
  return input.split("\n").reduce((sum, num) => sum + parseInt(num, 10), 0);
}
