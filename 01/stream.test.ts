import { describe, expect, test } from "@jest/globals";
import { findHighestInFile } from "./stream";

describe("find elf with highest number of food calories in file", () => {
  test("should return elf148", () => {
    expect(findHighestInFile("./input.txt")).resolves.toEqual({
      name: "elf148",
      totalFoodCalories: 70613,
    });
  });
});
