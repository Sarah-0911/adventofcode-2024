import { rawData01 } from "./rawData01.js"

const lines = rawData01.split("\n");

let leftList = [];
let rightList = [];


lines.forEach(line => {
  const parts = line.split(/\s+/).map(Number);
  leftList.push(parts[0]);
  rightList.push(parts[1]);
})

const totalDistance = (leftList, rightList) => {
  let total = 0;
  leftList.sort((a, b) => a - b)
  rightList.sort((a, b) => a - b)
  for (let i = 0; i < leftList.length; i++) {
    total += Math.abs(leftList[i] - rightList[i]);
  }
  return total;
}

totalDistance(leftList, rightList) // Good answer !


const totalSimilarityScore = (leftList, rightList) => {
  let totalSimilarity = 0;
  for (let i = 0; i < leftList.length; i++) {
    for (let j = 0; j < rightList.length; j++) {
      if (leftList[i] === rightList[j]) {
        totalSimilarity += leftList[i];
      }
    }
  }
  console.log(totalSimilarity);
}

totalSimilarityScore(leftList, rightList) // Good answer !
