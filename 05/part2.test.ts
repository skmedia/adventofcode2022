import { describe, expect, test } from "@jest/globals";
import { solve } from "./part2";
import fs from "fs";

describe("day - 5 part 2", () => {
  test("part 2 from file", () => {
    const moves = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    const stack = fs.readFileSync(__dirname + "/stack.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(moves, stack)).toEqual("FGLQJCMBD");
  });
});
