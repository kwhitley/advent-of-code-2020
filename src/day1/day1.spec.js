const { findProductOfSumTarget } = require('./day1')
const values = require('./values').split('\n').map(Number)

describe('findProductOfSumTarget(values)', () => {
  it('sorts values', () => {
    expect(findProductOfSumTarget([3,1,2], 3)).toBe(2)
  })

  it('can target 3 numbers', () => {
    expect(findProductOfSumTarget([1721,979,366,299,675,1456], 2020, 3)).toBe(241861950)
  })
})

describe('ANSWER', () => {
  it('part1 === 800139', () => {
    const answer = findProductOfSumTarget(values, 2020)
    expect(answer).toBe(800139)
  })

  it('part2 === 59885340', () => {
    const answer = findProductOfSumTarget(values, 2020, 3)
    expect(answer).toBe(59885340)
  })
})

