import fs from "fs";
import readline from "readline";

export async function findHighestInFile(file: string) {
  const fileStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let highest = 0;
  let highestElf = null;
  let values = [];
  let elf = 1;
  for await (const line of rl) {
    if (line === "") {
      let total = values.reduce((a, c) => a + c, 0);
      if (total > highest) {
        highest = total;
        highestElf = elf;
      }
      values = [];
      elf++;
    }
    values.push(Number(line));
  }

  return {
    name: "elf" + highestElf,
    totalFoodCalories: highest,
  };
}
