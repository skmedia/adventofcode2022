import fs from "fs";

function transpose(matrix: any) {
  return matrix[0].map((col: any, c: any) =>
    matrix.map((row: any, r: any) => matrix[r][c])
  );
}

export function parseStack(input: string) {
  let lines = input.split("\n");

  const hdr = lines.pop() as string;
  const rows = hdr.split(" ").filter((v) => Number(v)).length;
  const cellSize = 4;

  const grid = [];
  for (let i = 0; i < lines.length; i++) {
    let r = [];
    let start = 0;
    let end = cellSize;
    while (start < rows * cellSize) {
      const l = lines[i].substring(start, end);
      r.push(
        l
          .trim()
          .replace(/[^A-Z]/g, "")
          .trim()
      );
      start += cellSize;
      end += cellSize;
    }
    grid.push(r);
  }

  grid.reverse();
  let data = transpose(grid);
  data = data.map((r: any) => r.filter((r: any) => r.trim()));

  return data;
}

type Move = {
  count: number;
  from: number;
  to: number;
};

export function parseMoves(input: string): Move[] {
  let lines = input.trim().split("\n");

  const data = lines
    .map((v) => v.split(" ").filter((v) => Number(v)))
    .map(([count, from, to]) => ({
      count: Number(count),
      from: Number(from),
      to: Number(to),
    }));

  return data;
}

function updateStack(stack: string[][], move: Move) {
  let take = move.count;
  let pops = [];
  while (take > 0) {
    const s = stack[move.from - 1];
    let crate = s.pop() as string;
    pops.push(crate);
    take--;
  }

  pops.reverse().forEach((pop) => stack[move.to - 1].push(pop));

  return stack;
}

export function solve(movesDate: string, stackData: string) {
  let stack = parseStack(stackData);
  const moves = parseMoves(movesDate);

  moves.forEach((move: Move) => {
    updateStack(stack, move);
  });

  const res = stack.map((v: any) => v.pop());

  return res.join("");
}
