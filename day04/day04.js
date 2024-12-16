import { rawData04 } from "./rawData04.js"


const grid = rawData04.split("\n").map(row => row.split(''));

console.log(grid);

const findXmas = () => {
  let totalXmas = 0;

  grid.forEach((line) => {
    for (let i = 0; i < line.length - 3; i++) {
      let sequence = line.slice(i, i + 4).join('');
      if (sequence === "XMAS" || sequence === "SAMX") {
        totalXmas++;
      }
    }
  })

  console.log(totalXmas);
}

findXmas()


// dans une grid ya plusieurs tableaux les uns en dessous des autres, chacun comprenant plusieurs lettres.


  // ['M', 'M', 'M', 'S', 'A', 'M', 'X', 'A', 'M', 'M'],
  // ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
  // ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
  // ['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X']
