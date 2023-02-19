const AnalyzeArray = require('../scripts/analyzeArray')

it('average', () => {
    expect(AnalyzeArray([1, 2, 3, 4, 5]).average).toBe(3)
})

it('max', () => {
    expect(AnalyzeArray([1, 2, 3, 4, 5]).max).toBe(5)
})

it('min', () => {
    expect(AnalyzeArray([1, 2, 3, 4, 5]).min).toBe(1)
})

it('length', () => {
    expect(AnalyzeArray([1, 2, 3, 4, 5]).length).toBe(5)
})