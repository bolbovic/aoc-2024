import { solve1, solve2 } from "../src/day03";

const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

describe("Example Solution", () => {
  it("should find the correct answer for part 1", () => {
    expect(solve1(input)).toBe(161);
  });

  it("should find the correct answer for part 2", () => {
    const input =
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
    expect(solve2(input)).toBe(48);
  });
});

