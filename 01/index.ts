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
