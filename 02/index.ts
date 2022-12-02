//Rock defeats Scissors,
//Scissors defeats Paper,
//and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

const ShapeScore = {
  X: 1,
  Y: 2,
  Z: 3,
};

enum ShapesOther {
  "Rock" = "A",
  "Paper" = "B",
  "Scissors" = "C",
}

enum ShapesMe {
  "Rock" = "X",
  "Paper" = "Y",
  "Scissors" = "Z",
}

const scores = {
  [ShapesOther.Rock]: {
    [ShapesMe.Rock]: 3,
    [ShapesMe.Paper]: 6,
    [ShapesMe.Scissors]: 0,
  },
  [ShapesOther.Paper]: {
    [ShapesMe.Rock]: 0,
    [ShapesMe.Paper]: 3,
    [ShapesMe.Scissors]: 6,
  },
  [ShapesOther.Scissors]: {
    [ShapesMe.Rock]: 6,
    [ShapesMe.Paper]: 0,
    [ShapesMe.Scissors]: 3,
  },
};

export function calcScore(other: ShapesOther, me: ShapesMe): number {
  let totalScore = ShapeScore[me] + scores[other][me];

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
      score: calcScore(o as ShapesOther, m as ShapesMe),
    }));
}

export function solve(input: string) {
  const gameData = parseInput(input);

  return gameData.map((i) => i.score).reduce((a, c) => a + c, 0);
}
