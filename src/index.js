const guide = require('./config/guide')

let atomicNumber = 24
let counter = 0
let distribution = ' '

while (atomicNumber > 0) {
  while (guide[counter].lim < guide[counter].conf) {
    guide[counter].lim += 1
    atomicNumber = atomicNumber - 1
    if (atomicNumber <= 0) {
      break
    }
  }
  counter += 1
}

console.log(guide)
