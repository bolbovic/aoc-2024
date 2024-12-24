import { solve1, solve2 } from "../src/day04";

const input = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

describe("Example Solution", () => {
  it("should find the correct answer for part 1", () => {
    expect(solve1(input)).toBe(18);
  });

  it("should find the correct answer for part 2", () => {
    expect(solve2(input)).toBe(9);
  });
});

