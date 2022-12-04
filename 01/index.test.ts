import { describe, expect, test } from "@jest/globals";
import { solve, solvePart2 } from "./index";
import fs from "fs";

describe("day 1", () => {
  test("part 1", () => {
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

  test("part 1 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual({
      name: "elf209",
      totalFoodCalories: 74198,
    });
  });

  test("part 2 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solvePart2(input)).toEqual(209914);
  });
});
