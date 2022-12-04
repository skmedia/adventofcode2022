import { describe, expect, test } from "@jest/globals";
import { solve } from "./index";
import fs from "fs";

describe("day 3", () => {
  test("part 1", () => {
    const input = `
    vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
    `;

    expect(solve(input)).toEqual(157);
  });

  test("part 1 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual(8105);
  });
});
