import fs from "fs";

function log(...ags: any) {
  console.log(...ags);
}

function toNumber(char: string) {
  if (char.toLocaleLowerCase() === char) {
    return char.charCodeAt(0) - 96;
  }

  return char.charCodeAt(0) - 38;
}

function findCommonItems(groups: any) {
  let found: string[] = [];
  let letterFoundInOtherGroupsCount = 0;
  const firstGroup = groups.shift();

  if (!firstGroup) {
    throw new Error("first group is empty");
  }

  firstGroup.forEach((letter: any) => {
    groups.forEach((g: any, idx: number) => {
      if (g.includes(letter)) {
        letterFoundInOtherGroupsCount++;
      }
    });
    if (letterFoundInOtherGroupsCount === groups.length) {
      found.push(letter);
    }
    letterFoundInOtherGroupsCount = 0;
  });

  const result = [...new Set(found)];

  return result;
}

export function parseInputNew(input: string): any {
  const data = input.trim().split("\n");

  let cnt = 0;
  const groupPer = 3;
  let group: string[] = [];
  let groups: any = [];
  data.forEach((line) => {
    cnt++;
    group.push(line);
    if (cnt % groupPer === 0) {
      groups.push(group.map((l) => l.split("")));
      cnt = 0;
      group = [];
    }
  });

  return groups;
}

export function solve(input: string) {
  const data = parseInputNew(input);

  return data
    .flatMap((group: string[]) => findCommonItems(group))
    .map((v: string) => toNumber(v))
    .reduce((a: number, c: number) => a + c, 0);

  return data;
}
