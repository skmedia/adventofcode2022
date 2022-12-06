export function solve(input: string, charCount: number): number {
  let found = 0;
  let line = 0;
  let lines = input.trim().split("\n");
  lines.forEach((l) => {
    let start = 0;
    let end = charCount;
    while (end < input.length || found === 0) {
      const l = lines[line].substring(start, end) as string;
      // Check unique charset
      if (l.match(/^(?!.*(.).*\1)[a-z]+$/)) {
        found = end;
        break;
      }
      start++;
      end++;
    }
    line++;
  });

  return found;
}
