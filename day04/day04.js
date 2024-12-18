import { rawData04 } from "./rawData04.js"

// const grid = rawData04.split("\n").map(row => row.split(''));

const grid = [
['M', 'M', 'M', 'S', 'A', 'M', 'X', 'X', 'M', 'M'],
['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X']
]

// console.log(grid);

const findXmas = () => {
  let totalXmas = 0;

  const checkSequence = (line, index) => {
    let sequence = line.slice(index, index + 4).join("");
    return sequence === "XMAS" || sequence === "SAMX"
  }

  // Étape 1 : Construire les colonnes
  let columns = Array.from({length: grid[0].length}, () => []); // Créer un tableau avec une length définie, contenant des sous-tableaux prêts à être remplis.

  grid.forEach((row) => {
    row.forEach((char, colIndex) => {
      columns[colIndex].push(char);
    });
  });

  // Étape 2 : Vérifier les séquences dans les lignes (horizontal)
  grid.forEach((row) => {
    for (let i = 0; i < row.length - 3; i++) { // Parcours chaque tranche de 4 lettres consécutives
      if (checkSequence(row, i)) {
        totalXmas++;
      }
    }
  });

  // Étape 3 : Vérifier les séquences dans les colonnes (vertical)
  columns.forEach((col) => {
    for (let i = 0; i < col.length - 3; i++) {
      if (checkSequence(col, i)) {
        totalXmas++;
      }
    }
  });

  // console.log(columns);
  console.log(totalXmas);
};

findXmas();


// dans une grid ya plusieurs tableaux les uns en dessous des autres, chacun comprenant plusieurs lettres.
