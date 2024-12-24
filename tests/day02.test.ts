import { solve1, solve2 } from "../src/day02";

const input = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

describe("Day 2 Solution", () => {
  it("should find the correct answer for part 1", () => {
    expect(solve1(input)).toBe(2);
  });

  it("should find the correct answer for part 2", () => {
    expect(solve2(input)).toBe(4);
  });
});

