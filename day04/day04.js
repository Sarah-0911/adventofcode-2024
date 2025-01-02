import { rawData04 } from "./rawData04.js"

const grid = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`.split("\n").map(row => row.split(''))

console.log(grid.length);

const input = rawData04.split("\n").map(row => row.split(''));


// const grid = [
// ['M', 'X', 'M', 'A', 'S', 'M', 'X', 'X', 'M', 'M'],
// ['M', 'S', 'A', 'A', 'X', 'M', 'S', 'M', 'S', 'A'],
// ['A', 'M', 'X', 'M', 'X', 'M', 'A', 'A', 'M', 'M'],
// ['M', 'S', 'A', 'X', 'S', 'A', 'M', 'X', 'M', 'X']
// ]

// console.log(grid);


const findXmas = (grid) => {
  let total = 0;

  const checkRight = (x, y) => {
    return  x + 3 < grid[0].length && y < grid.length &&
     grid[y][x + 1] === 'M' && grid[y][x + 2] === 'A' && grid[y][x + 3] === 'S';
  }

  const checkLeft = (x, y) => {
    return  x - 3 >= 0 && y < grid.length &&
     grid[y][x - 1] === 'M' && grid[y][x - 2] === 'A' && grid[y][x - 3] === 'S';
  }

  const checkDown = (x, y) => {
    return  y + 3 < grid.length && x < grid[0].length &&
     grid[y + 1][x] === 'M' && grid[y + 2][x] === 'A' && grid[y + 3][x] === 'S';
  }

  const checkUp = (x, y) => {
    return  y - 3 >= 0 && x < grid[0].length &&
     grid[y - 1][x] === 'M' && grid[y - 2][x] === 'A' && grid[y - 3][x] === 'S';
  }

  const checkRightDown = (x, y) => {
    return  y + 3 < grid.length && x + 3 < grid[0].length &&
     grid[y + 1][x + 1] === 'M' && grid[y + 2][x + 2] === 'A' && grid[y + 3][x + 3] === 'S';
  }

  const checkLeftUp = (x, y) => {
    return  y - 3 >= 0 &&  x - 3 >= 0 &&
     grid[y - 1][x - 1] === 'M' && grid[y - 2][x - 2] === 'A' && grid[y - 3][x - 3] === 'S';
  }

  const checkLeftDown = (x, y) => {
    return  y + 3 < grid.length && x - 3 >= 0 &&
     grid[y + 1][x - 1] === 'M' && grid[y + 2][x - 2] === 'A' && grid[y + 3][x - 3] === 'S';
  }

  const checkRightUp = (x, y) => {
    return  y - 3 >= 0 && x + 3 < grid[0].length &&
     grid[y - 1][x + 1] === 'M' && grid[y - 2][x + 2] === 'A' && grid[y - 3][x + 3] === 'S';
  }


  //lignes
  grid.forEach((row, y) => {
    row.forEach((char, x) => {
      if (char === 'X') {
        if (checkRight(x, y)) total++;
        if (checkLeft(x, y)) total++;
        if (checkDown(x, y)) total++;
        if (checkUp(x, y)) total++;
        if (checkRightDown(x, y)) total++;
        if (checkLeftUp(x, y)) total++;
        if (checkLeftDown(x, y)) total++;
        if (checkRightUp(x, y)) total++;
      }
    })
  })
  console.log(total);
}

findXmas(input);
