const calculator = require('../scripts/calculator')

it('add', () => {
    expect(calculator.add(5, 5)).toBe(10)
})

it('substract', () => {
    expect(calculator.subtract(20, 15)).toBe(5)
})

it('divide', () => {
    expect(calculator.divide(33, 3)).toBe(11)
})

it('multiply', () => {
    expect(calculator.multiply(5, 7)).toBe(35)
})