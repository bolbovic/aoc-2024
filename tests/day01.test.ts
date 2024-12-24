import { solve } from "../src/day01";

describe("Day 1 Solution", () => {
  it("should return the correct sum", () => {
    const input = "1\n2\n3";
    expect(solve(input)).toBe(6);
  });
});
