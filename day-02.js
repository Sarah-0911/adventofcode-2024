const rawList =
`3 6 7 9 11 8
21 24 25 26 29 30 32 32
29 32 33 34 35 37 38 42
54 55 57 58 60 61 63 70
59 61 60 63 65 68 71`

const lines = rawList.split("\n");
const listOfReports = [];

lines.forEach(line => {
  const report =  line.split(/\s+/).map(Number);
  listOfReports.push(report)
})

console.log(listOfReports);

let totalSafeReport = [];

const checkSafeReport = (report) => {
  let isSafe = true;

  for (let i = 0; i < report.length - 1; i++) {
    if (report[i] === report[i + 1] || Math.abs(report[i + 1] - report[i]) > 3) {
      isSafe = false;
      break;
    }
  }

  if (isSafe) {
    totalSafeReport.push(report);
  }
}
listOfReports.forEach(report => checkSafeReport(report));
console.log("Total safe reports:", totalSafeReport.length);
