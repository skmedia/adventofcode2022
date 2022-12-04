import { describe, expect, test } from "@jest/globals";
import { solve } from "./stream";
import fs from "fs";

describe("day 1 - stream file", () => {
  test("part 1 from file - stream data", () => {
    expect(solve(__dirname + "/input.txt")).resolves.toEqual({
      name: "elf209",
      totalFoodCalories: 74198,
    });
  });
});
