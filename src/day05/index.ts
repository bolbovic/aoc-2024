const checkUpdate = (
  update: string[],
  shouldBeBefore: Record<string, string[]>
) => {
  if (update.length === 1) return true;

  const [num, ...otherPages] = update;

  for (const page of otherPages) {
    if (!shouldBeBefore[num] || !shouldBeBefore[num]?.includes(page)) {
      return false;
    }
  }

  return checkUpdate(otherPages, shouldBeBefore);
};

const parseInput = (
  input: string
): [shouldBeBefore: Record<string, string[]>, updates: string[][]] => {
  const lines = input.split("\n");
  let i = 0;
  const shouldBeBefore: Record<string, string[]> = {};
  for (i = 0; lines[i] !== "" || i === 0; i++) {
    const line = lines[i];
    const [left, right] = line.split("|");
    if (left && right) {
      shouldBeBefore[left] = [...(shouldBeBefore[left] || []), right];
    }
  }

  let updates: string[][] = [];
  for (let j = 1; j + i < lines.length; j++) {
    updates.push(lines[i + j].split(","));
  }

  return [shouldBeBefore, updates];
};

export function solve1(input: string): number {
  const [shouldBeBefore, updates] = parseInput(input);

  let sum = 0;
  for (let j = 0; j < updates.length; j++) {
    const update = updates[j];
    if (checkUpdate(update, shouldBeBefore)) {
      sum += parseInt(update[(update.length - 1) / 2]);
    }
  }

  return sum;
}

const fixUpdate = (
  update: string[],
  shouldBeBefore: Record<string, string[]>
): string[] => {
  if (update.length === 1) return update;

  const [num, ...otherPages] = update;

  for (const page of otherPages) {
    if (!shouldBeBefore[num] || !shouldBeBefore[num]?.includes(page)) {
      return fixUpdate(
        [page, num, ...otherPages.filter((p) => p !== page)],
        shouldBeBefore
      );
    }
  }

  return [num, ...fixUpdate(otherPages, shouldBeBefore)];
};

export function solve2(input: string): number {
  const [shouldBeBefore, updates] = parseInput(input);
  let sum = 0;

  for (let j = 0; j < updates.length; j++) {
    const update = updates[j];
    if (!checkUpdate(update, shouldBeBefore)) {
      const fixed = fixUpdate(update, shouldBeBefore);
      sum += parseInt(fixed[(fixed.length - 1) / 2]);
    }
  }
  return sum;
}

