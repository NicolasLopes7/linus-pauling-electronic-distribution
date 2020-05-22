module.exports = {
  generateDistributionString(guide) {
    let distribution = ''
    for (let i = 0; i < guide.length; i++) {
      if (guide[i].lim > 0) {
        distribution += guide[i].name + guide[i].lim + ' '
      } else {
        break
      }
    }
    return distribution
  },
}
