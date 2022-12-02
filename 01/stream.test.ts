import { describe, expect, test } from "@jest/globals";
import { solve } from "./stream";
import fs from "fs";

describe("find elf with highest number of food calories in file", () => {
  test("should return elf148", () => {
    expect(solve(__dirname + "/input.txt")).resolves.toEqual({
      name: "elf209",
      totalFoodCalories: 74198,
    });
  });
});
