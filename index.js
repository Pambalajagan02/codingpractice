const factorials = require('../factorial/index')
const ratios = require('../ratio/index')
const ratioAndFactorial = (num1, num2, num3) => {
  const factorial = factorials(num3)
  const ratio = ratios(num1, num2)
  return {
    ratio,
    factorial,
  }
}
module.exports = ratioAndFactorial
