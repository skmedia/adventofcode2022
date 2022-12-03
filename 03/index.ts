function toNumber(char: string) {
  if (char.toLocaleLowerCase() === char) {
    return char.charCodeAt(0) - 96;
  }

  return char.charCodeAt(0) - 38;
}

function findItemsInBothCompartments(one: string[], two: string[]) {
  let found: string[] = [];
  one.forEach((a) => {
    if (two.includes(a)) {
      found.push(a);
    }
  });

  return [...new Set(found)];
}

export function parseInput(input: string): { one: string[]; two: string[] }[] {
  return input
    .trim()
    .split("\n")
    .map((v) => [
      v.trim().substring(0, v.length / 2),
      v.trim().substring(v.length / 2),
    ])
    .map(([o, m]) => ({
      one: o.split(""),
      two: m.split(""),
    }));
}

export function solve(input: string) {
  const data = parseInput(input);

  const res = data
    .flatMap(({ one, two }) => findItemsInBothCompartments(one, two))
    .map((v) => toNumber(v))
    .reduce((a, c) => a + c, 0);

  return res;
}
