import { describe, expect, test } from "@jest/globals";
import { solve } from "./index";
import fs from "fs";

describe("day 4", () => {
  test("part 1 from file", () => {
    const moves = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    const stack = fs.readFileSync(__dirname + "/stack.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(moves, stack)).toEqual("TLNGFGMFN");
  });
});
