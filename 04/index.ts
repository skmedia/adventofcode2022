// Convert 2-4 to [2, 3, 4]
const range = ([start, stop]: [number, number], step: number = 1): number[] => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
};

// Convert 2-4 to 002_003_004
const stringData = (v: string) =>
  range(v.split("-").map((v) => Number(v)) as [number, number])
    .map((n) => String(n).padStart(3, "0"))
    .join("_");

export function parseInput(input: string): { r1: string; r2: string }[] {
  return input
    .trim()
    .split("\n")
    .map((v) => v.split(","))
    .map(([r1, r2]) => ({
      r1: stringData(r1),
      r2: stringData(r2),
    }));
}

export function solve(input: string) {
  const data = parseInput(input);

  return data.filter((v) => v.r2.includes(v.r1) || v.r1.includes(v.r2)).length;
}
