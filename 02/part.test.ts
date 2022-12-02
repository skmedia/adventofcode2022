import { describe, expect, test } from "@jest/globals";
import { solve } from "./part2";
import fs from "fs";

describe("rock, paper and scissors game part 2", () => {
  test("calc total game score according to strategy guide", () => {
    const input = `
    A Y
    B X
    C Z
    `;

    expect(solve(input)).toEqual(12);
  });

  test("calc total game score according to strategy guide from file part 2", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual(11373);
  });
});
