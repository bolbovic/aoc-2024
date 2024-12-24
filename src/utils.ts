type Table = number[][];

export function parseToTable(input: string): Table {
  // Handle empty or whitespace-only input
  if (!input.trim()) return [];

  return input
    .trim()
    .split("\n") // Split by newlines to get rows
    .map(
      (row) =>
        row
          .trim()
          .split(/\s+/) // Split by spaces or tabs
          .filter((s) => !Number.isNaN(parseInt(s)))
          .map(Number) // Convert each value to a number
    )
    .filter((row) => row.length > 0); // Remove empty rows if they exist
}

export function splitColumns(table: Table): number[][] {
  // Handle empty table case
  if (table.length === 0) return [];

  // Determine the maximum number of columns in any row
  const columnCount = Math.max(...table.map((row) => row.length));

  // Initialize an array of empty arrays, one for each column
  const columns: number[][] = Array.from({ length: columnCount }, () => []);

  // Populate each column array
  table.forEach((row) => {
    row.forEach((value, colIndex) => {
      columns[colIndex].push(value);
    });
  });

  return columns;
}

