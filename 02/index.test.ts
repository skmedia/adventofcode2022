import { describe, expect, test } from "@jest/globals";
import { solve } from "./index";
import fs from "fs";

describe("rock, paper and scissors game", () => {
  test("calc total game score according to strategy guide", () => {
    const input = `
    A Y
    B X
    C Z
    `;

    expect(solve(input)).toEqual(15);
  });

  test("calc total game score according to strategy guide from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input)).toEqual(13005);
  });
});