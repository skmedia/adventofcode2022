import fs from "fs";

export async function solveStream(filePath: string, sLength: number) {
  return new Promise((resolve, reject) => {
    var readable = fs.createReadStream(filePath, {
      encoding: "utf8",
      fd: undefined,
    });
    readable.on("readable", function () {
      var chunk;
      let s = "";
      let start = 0;
      let reads = 0;
      while (null !== (chunk = readable.read(1))) {
        reads++;
        s += chunk;
        if (s.length < sLength) {
          continue;
        }
        const l = s.substring(start++);
        if (l.match(/^(?!.*(.).*\1)[a-z]+$/)) {
          readable.close();
          resolve(reads);
          break;
        }
      }
    });
  });
}
