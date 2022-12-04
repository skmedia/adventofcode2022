import { describe, expect, test } from "@jest/globals";
import { solve } from "./part2";
import fs from "fs";

describe("day 2 - part 2", () => {
  test("part 2", () => {
    const input = `
    A Y
    B X
    C Z
    `;

    expect(solve(input)).toEqual(12);
  });

  test("part 2 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual(11373);
  });
});
