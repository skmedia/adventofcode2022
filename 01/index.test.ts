import { describe, expect, test } from "@jest/globals";
import { solve, solvePart2 } from "./index";
import fs from "fs";

describe("find elf with highest number of food calories", () => {
  test("should return the last elf when total is not unique", () => {
    const input = `
2000
3000

2000
3000
`;

    expect(solve(input)).toEqual({
      name: "elf2",
      totalFoodCalories: 5000,
    });
  });

  test("should return elf4", () => {
    const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

    expect(solve(input)).toEqual({
      name: "elf4",
      totalFoodCalories: 24000,
    });
  });

  test("should return elf148", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual({
      name: "elf209",
      totalFoodCalories: 74198,
    });
  });

  test("should return 3 elves", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solvePart2(input)).toEqual(209914);
  });
});
