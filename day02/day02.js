import { rawData02 } from "./rawData02.js"

const lines = rawData02.split("\n");
const listOfReports = [];

lines.forEach(line => {
  const report =  line.split(/\s+/).map(Number);
  listOfReports.push(report);
})

// console.log(listOfReports);


const checkSafeReport = (report) => {
  let allIncreasing = true;
  let allDecreasing = true;

  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i + 1] - report[i];
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;

    if (diff <= 0) {
      allIncreasing = false;
    }
    if (diff >= 0) {
      allDecreasing = false;
    }
  }

  return allIncreasing || allDecreasing;
}

let totalSafeReport = listOfReports.filter(report => checkSafeReport(report));
console.log(totalSafeReport.length);  // Good answer !


const checkSafeWithDampener = (report) => {
  if (checkSafeReport(report)) return true;

  for (let i = 0; i < report.length; i++) {
    const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
    if (checkSafeReport(modifiedReport)) return true;
  }
  return false;
}

let totalUpdtated = listOfReports.filter(report => checkSafeWithDampener(report)).length;
console.log(totalUpdtated);  // Good answer !
