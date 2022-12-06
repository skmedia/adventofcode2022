import fs from "fs";
import { parseStack } from "./part2";

function transpose(matrix: any) {
  return matrix[0].map((col: any, c: any) =>
    matrix.map((row: any, r: any) => matrix[r][c])
  );
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

function updateStack(stack: string[][], from: number, to: number) {
  let crate = stack[from - 1].pop() as string;
  stack[to - 1].push(crate);

  return stack;
}

export function solve(movesDate: string, stackData: string) {
  let stack = parseStack(stackData);
  const moves = parseMoves(movesDate);

  moves.forEach((move: Move) => {
    for (let i = 0; i < move.count; i++) {
      stack = updateStack(stack, move.from, move.to);
    }
  });

  const res = stack.map((v: any) => v.pop());

  return res.join("");
}
