const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8')

const result = data.split('\n')
    .map(x => parseInt(x, 10))
    .reduce((a = 0, b) => a + b)

console.log(result)