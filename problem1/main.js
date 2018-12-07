const fs = require('fs')

// Read the input file
const data = fs.readFileSync('./input.txt', 'utf8')


// Part 1

const result = data.split('\n')
    .map(x => parseInt(x, 10))
    .reduce((a = 0, b) => a + b)

console.log(result)

// Part 2

let map = {};
let repeat;

let parsedArray = data.split('\n')
  .map(x => parseInt(x));

let previousResult = 0;

while(repeat == null) {
  previousResult = parsedArray.reduce((a, b) => {
    let sum = a + b;
    if (repeat == null && map[sum]) {
        repeat = sum;
    }

    map[sum] = map[sum] ? ++map[sum] : 1;
    return sum;
  }, previousResult);
}

console.log(repeat)