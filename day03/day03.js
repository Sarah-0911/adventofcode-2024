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
