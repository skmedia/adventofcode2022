type ElfWithTotalFoodCalories = {
  name: string;
  totalFoodCalories: number;
};

type Elf = {
  name: string;
  foodCalories: number[];
};

export function parseInput(input: string): Elf[] {
  return input
    .trim()
    .split("\n\n")
    .map((i, idx) => ({
      name: "elf" + (idx + 1),
      foodCalories: i.split("\n").map((i) => Number(i)),
    }));
}

export function solve(input: string): ElfWithTotalFoodCalories | null {
  const elfs: Elf[] = parseInput(input);

  return elfs
    .map((c) => ({
      name: c.name,
      totalFoodCalories: c.foodCalories.reduce((a, c) => a + c, 0),
    }))
    .reduce(function (prev, current) {
      return prev.totalFoodCalories > current.totalFoodCalories
        ? prev
        : current;
    });
}

export function solvePart2(input: string) {
  const elfs: Elf[] = parseInput(input);

  const data = elfs
    .map((c) => ({
      name: c.name,
      totalFoodCalories: c.foodCalories.reduce((a, c) => a + c, 0),
    }))
    .sort((a, b) => (a.totalFoodCalories > b.totalFoodCalories ? -1 : 1))
    .slice(0, 3)
    .reduce((a, c) => a + c.totalFoodCalories, 0);

  return data;
}
