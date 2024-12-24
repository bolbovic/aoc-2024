import { solve1, solve2 } from "../src/day01";

const input = `
3   4
4   3
2   5
1   3
3   9
3   3`;

describe("Day 1 Solution", () => {
  it("should return the correct sum", () => {
    expect(solve1(input)).toBe(11);
    expect(solve2(input)).toBe(31);
  });
});

