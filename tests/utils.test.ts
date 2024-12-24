import { parseToTable, splitColumns } from "../src/utils"; // Adjust the import path based on your project structure

describe("Utility Functions", () => {
  // Test for parseToTable
  describe("parseToTable", () => {
    it("should parse a string input into a table of numbers", () => {
      const input = `3 4 5\n6 7 8\n9 10 11`;
      const expected = [
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
      ];
      expect(parseToTable(input)).toEqual(expected);
    });

    it("should ignore extra spaces and tabs between numbers", () => {
      const input = `3\t4 5  \n6   7\t8\n\t9 10   11`;
      const expected = [
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
      ];
      expect(parseToTable(input)).toEqual(expected);
    });

    it("should handle empty strings", () => {
      const input = "";
      const expected: number[][] = [];
      expect(parseToTable(input)).toEqual(expected);
    });

    it("should handle a single row", () => {
      const input = "1 2 3";
      const expected = [[1, 2, 3]];
      expect(parseToTable(input)).toEqual(expected);
    });

    it("should handle a single column", () => {
      const input = "1\n2\n3";
      const expected = [[1], [2], [3]];
      expect(parseToTable(input)).toEqual(expected);
    });

    it("should handle extra newlines and spaces", () => {
      const input = `\n\n  3 4 5  \n6 7 8 \n\n\t9 10 11\n\n`;
      const expected = [
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
      ];
      expect(parseToTable(input)).toEqual(expected);
    });
  });

  // Test for splitColumns
  describe("splitColumns", () => {
    it("should split the table into columns", () => {
      const table = [
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
      ];
      const expected = [
        [3, 6, 9],
        [4, 7, 10],
        [5, 8, 11],
      ];
      expect(splitColumns(table)).toEqual(expected);
    });

    it("should handle an empty table", () => {
      const table: number[][] = [];
      const expected: number[][] = [];
      expect(splitColumns(table)).toEqual(expected);
    });

    it("should handle a table with a single column", () => {
      const table = [[3], [6], [9]];
      const expected = [[3, 6, 9]];
      expect(splitColumns(table)).toEqual(expected);
    });

    it("should handle a table with a single row", () => {
      const table = [[3, 4, 5]];
      const expected = [[3], [4], [5]];
      expect(splitColumns(table)).toEqual(expected);
    });
  });
});

