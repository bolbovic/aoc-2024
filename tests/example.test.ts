import { solve1, solve2 } from "../src/example";

const input = `1 2 3`;

describe("Example Solution", () => {
  it("should find the correct answer for part 1", () => {
    expect(solve1(input)).toBe(3);
  });

  it("should find the correct answer for part 2", () => {
    expect(solve2(input)).toBe(3);
  });
});

