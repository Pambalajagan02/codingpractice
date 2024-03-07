const factorials = require('../utilities/factorial/index')
const ratios = require('../utilities/ratio/index')
const findingvalues = (num1, num2, num3) => {
  const factorial = factorials(num3)
  const ratio = ratios(num1, num2)
  return {
    ratio,
    factorial,
  }
}
