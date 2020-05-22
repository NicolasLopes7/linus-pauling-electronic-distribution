module.exports = {
  populateLimits(guide, atomicNumber) {
    let counter = 0
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
  },
}
