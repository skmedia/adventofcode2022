import { describe, expect, test } from "@jest/globals";
import { solve } from "./index";
import fs from "fs";

describe("day 2", () => {
  test("part 1", () => {
    const input = `
    A Y
    B X
    C Z
    `;

    expect(solve(input)).toEqual(15);
  });

  test("part 1 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual(13005);
  });
});
