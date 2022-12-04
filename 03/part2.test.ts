import { describe, expect, test } from "@jest/globals";
import { solve } from "./part2";
import fs from "fs";

describe("day 3 - part 2", () => {
  test("part 2", () => {
    const input = `
    vJrwpWtwJgWrhcsFMMfFFhFp
    jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
    PmmdzqPrVvPwwTWBwg
    wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
    `;

    expect(solve(input)).toEqual(70);
  });

  describe("part 2 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual(2363);
  });
});
