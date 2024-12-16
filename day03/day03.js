import { rawData03 } from "./rawData03.js"

const handleInstructions = (instructions) => {
  const incorruptedMuls = instructions.match(/mul\(\d+,\d+\)/g);
  // console.log(incorruptedMuls);

  let total = 0;
  incorruptedMuls.forEach(mul => {
    const [x, y] = mul.match(/\d+/g).map(Number);
    total += x * y;
  })

  console.log(total);
}

handleInstructions(rawData03); // Good answer !


const updateIncorruptedMuls = (rawData) => {
  let enabled = true;
  let total = 0;

  const instructions = rawData.match(/mul\(\d+,\d+\)|don't\(\)|do\(\)/g);
  // console.log(instructions);

  instructions.forEach(instruction => {
    if (instruction === "do()") {
      enabled = true;
    } else if (instruction === "don't()") {
      enabled = false;
    } else if (enabled && instruction.startsWith("mul")) {
      const [x, y] = instruction.match(/\d+/g).map(Number);
      total += x * y;
    }
  })
  console.log(total);
}


updateIncorruptedMuls(rawData03); // Good answer !
