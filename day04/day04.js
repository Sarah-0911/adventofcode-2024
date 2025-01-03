import { rawData04 } from "./rawData04.js"

const grid =
`.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`.trim().split("\n").map(row => row.split(''))

const input = rawData04.split("\n").map(row => row.split(''));


const findXmas = (grid) => {
  let total = 0;

  //1ere partie ----------------------------------------------------------------

  const checkRight = (x, y) => {
    return  x + 3 < grid[0].length && y < grid.length &&
     grid[y][x + 1] === 'M' && grid[y][x + 2] === 'A' && grid[y][x + 3] === 'S';
  }

  const checkLeft = (x, y) => {
    return  x - 3 >= 0 && y < grid.length &&
     grid[y][x - 1] === 'M' && grid[y][x - 2] === 'A' && grid[y][x - 3] === 'S';
  }

  const checkDown = (x, y) => {
    return y + 3 < grid.length && x < grid[0].length &&
     grid[y + 1][x] === 'M' && grid[y + 2][x] === 'A' && grid[y + 3][x] === 'S';
  }

  const checkUp = (x, y) => {
    return y - 3 >= 0 && x < grid[0].length &&
     grid[y - 1][x] === 'M' && grid[y - 2][x] === 'A' && grid[y - 3][x] === 'S';
  }

  const checkRightDown = (x, y) => {
    return y + 3 < grid.length && x + 3 < grid[0].length &&
     grid[y + 1][x + 1] === 'M' && grid[y + 2][x + 2] === 'A' && grid[y + 3][x + 3] === 'S';
  }

  const checkLeftUp = (x, y) => {
    return y - 3 >= 0 &&  x - 3 >= 0 &&
     grid[y - 1][x - 1] === 'M' && grid[y - 2][x - 2] === 'A' && grid[y - 3][x - 3] === 'S';
  }

  const checkLeftDown = (x, y) => {
    return y + 3 < grid.length && x - 3 >= 0 &&
     grid[y + 1][x - 1] === 'M' && grid[y + 2][x - 2] === 'A' && grid[y + 3][x - 3] === 'S';
  }

  const checkRightUp = (x, y) => {
    return y - 3 >= 0 && x + 3 < grid[0].length &&
     grid[y - 1][x + 1] === 'M' && grid[y - 2][x + 2] === 'A' && grid[y - 3][x + 3] === 'S';
  }

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


  //2e partie ------------------------------------------------------------------

  const rightDown = (x, y) => {
    return x - 1 >= 0 && y - 1 >= 0 && grid[y - 1][x - 1] === "M" &&
     x + 1 < grid[0].length && y + 1 < grid.length && grid[y + 1][x + 1] === "S";
  };

  const leftDown = (x, y) => {
    return x + 1 < grid[0].length && y - 1 >= 0 && grid[y - 1][x + 1] === "M" &&
     x - 1 >= 0 && y + 1 < grid.length && grid[y + 1][x - 1] === "S";
  };

  const rightUp = (x, y) => {
    return x - 1 >= 0 && y + 1 < grid.length && grid[y + 1][x - 1] === "M" &&
     x + 1 < grid[0].length && y - 1 >= 0 && grid[y - 1][x + 1] === "S";
  };

  const leftUp = (x, y) => {
     return x + 1 < grid[0].length && y + 1 < grid.length && grid[y + 1][x + 1] === "M" &&
      x - 1 >= 0 && y - 1 >= 0 && grid[y - 1][x - 1] === "S";
  };

  let totalCrosses = 0;

  grid.forEach((row, y) => {
    row.forEach((char, x) => {
      if (char === "A") {
        if (rightDown(x, y) && leftDown(x, y)) totalCrosses++;
        if (rightUp(x, y) && leftUp(x, y)) totalCrosses++;
        if (leftDown(x, y) && leftUp(x, y)) totalCrosses++;
        if (rightUp(x, y) && rightDown(x, y)) totalCrosses++;
      }
    })
  })

  console.log(totalCrosses);
}

findXmas(input);
