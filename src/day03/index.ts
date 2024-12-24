export function solve1(input: string): number {
  const regExp = /mul\(([0-9]+),([0-9]+)\)/g;

  let result = 0;
  let match;
  while ((match = regExp.exec(input)) !== null) {
    const firstNumber = parseInt(match[1], 10);
    const secondNumber = parseInt(match[2], 10);
    result += firstNumber * secondNumber;
  }
  return result;
}

export function solve2(input: string): number {
  const regExp = /(mul\(([0-9]+),([0-9]+)\))|do\(\)|don\'t\(\)/g;

  let result = 0;
  let match;
  let exec = true;
  while ((match = regExp.exec(input)) !== null) {
    if (match[0] === "do()") {
      exec = true;
    } else if (match[0] === "don't()") {
      exec = false;
    } else if (exec) {
      const firstNumber = parseInt(match[2], 10);
      const secondNumber = parseInt(match[3], 10);
      result += firstNumber * secondNumber;
    }
  }
  return result;
}

