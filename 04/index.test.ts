import { describe, expect, test } from "@jest/globals";
import { solve } from "./index";
import fs from "fs";

describe("day 4", () => {
  test("part 1", () => {
    const input = `
    1-1,3-18
    2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8
    `;

    expect(solve(input)).toEqual(2);
  });

  test("part 1 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual(496);
  });
});
