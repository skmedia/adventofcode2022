import { describe, expect, test } from "@jest/globals";
import { findHighestInFile } from "./stream";
import fs from "fs";

describe("find elf with highest number of food calories in file", () => {
  test("should return elf148", () => {
    expect(findHighestInFile(__dirname + "/input.txt")).resolves.toEqual({
      name: "elf148",
      totalFoodCalories: 70613,
    });
  });
});
