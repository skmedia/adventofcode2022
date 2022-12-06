import { describe, expect, test } from "@jest/globals";
import { solve } from "./index";
import { solveStream } from "./stream";
import fs from "fs";

describe("day 6", () => {
  test("part 1 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input, 4)).toEqual(1140);
  });

  test("part 2 from file", () => {
    const input = fs.readFileSync(__dirname + "/input.txt", {
      encoding: "utf8",
      flag: "r",
    });

    expect(solve(input, 14)).toEqual(3495);
  });

  test("part 1 from file stream", () => {
    expect(solveStream(__dirname + "/input.txt", 4)).resolves.toEqual(1140);
  });

  test("part 2 from file stream", () => {
    expect(solveStream(__dirname + "/input.txt", 14)).resolves.toEqual(3495);
  });
});
