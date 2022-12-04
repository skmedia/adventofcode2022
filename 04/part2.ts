// Convert 2-4 to [2, 3, 4]
const range = ([start, stop]: [number, number], step: number = 1): number[] => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
};

const makeRange = (v: string) =>
  range(v.split("-").map((v) => Number(v)) as [number, number]);

export function parseInput(input: string): { r1: number[]; r2: number[] }[] {
  return input
    .trim()
    .split("\n")
    .map((v) => v.split(","))
    .map(([r1, r2]) => ({
      r1: makeRange(r1),
      r2: makeRange(r2),
    }));
}

const hasOverlap = (r1: number[], r2: number[]) => {
  return (
    r1.filter((v) => r2.includes(v)).length ||
    r2.filter((v) => r1.includes(v)).length
  );
};

export function solve(input: string) {
  const data = parseInput(input);

  return data.filter((v) => hasOverlap(v.r1, v.r2)).length;
}

const input = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

console.log(solve(input));
