const guide = require('./config/guide')
const { populateLimits } = require('./utils/PopulateLimits')
const {
  generateDistributionString,
} = require('./utils/GenerateDistributionString')

const atomicNumber = 24
populateLimits(guide, atomicNumber)
const distribution = generateDistributionString(guide)
console.log(distribution)
