//Rock defeats Scissors,
//Scissors defeats Paper,
//and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

const ShapeScore = {
  A: 1,
  B: 2,
  C: 3,
};

enum Shapes {
  "Rock" = "A",
  "Paper" = "B",
  "Scissors" = "C",
}

enum ExpectedResult {
  "Lose" = "X",
  "Draw" = "Y",
  "Win" = "Z",
}

const scores = {
  [Shapes.Rock]: {
    [Shapes.Rock]: 3,
    [Shapes.Paper]: 6,
    [Shapes.Scissors]: 0,
  },
  [Shapes.Paper]: {
    [Shapes.Rock]: 0,
    [Shapes.Paper]: 3,
    [Shapes.Scissors]: 6,
  },
  [Shapes.Scissors]: {
    [Shapes.Rock]: 6,
    [Shapes.Paper]: 0,
    [Shapes.Scissors]: 3,
  },
};

function findShape(other: Shapes, expectedResult: ExpectedResult): Shapes {
  for (const [key, value] of Object.entries(scores[other])) {
    if (value === (expectedResult === ExpectedResult.Lose ? 0 : 6)) {
      return key as Shapes;
    }
  }
  throw new Error("bleh");
}

export function calcScore(
  otherShape: Shapes,
  expectedResult: ExpectedResult
): number {
  let myShape: Shapes =
    expectedResult === ExpectedResult.Draw
      ? otherShape
      : findShape(otherShape, expectedResult);

  let totalScore = ShapeScore[myShape];
  totalScore += scores[otherShape][myShape];

  return totalScore;
}

export function parseInput(input: string) {
  return input
    .trim()
    .split("\n")
    .map((v) => v.trim().split(" "))
    .map(([o, m]) => ({
      other: o,
      me: m,
      score: calcScore(o as Shapes, m as ExpectedResult),
    }));
}

export function solve(input: string) {
  const gameData = parseInput(input);

  return gameData.map((i) => i.score).reduce((a, c) => a + c, 0);
}
