const { sumOfYesAnswers } = require('./day6')
const { test, actual } = require('./inputs')

describe('sumOfAnyoneYesAnswers', () => {
  it('sums up answers where someone said yes', () => {
    expect(sumOfYesAnswers(test)).toBe(11)
  })
  it('sums up answers where everyone said yes', () => {
    expect(sumOfYesAnswers(test, true)).toBe(6)
  })
})

describe('DAY 6 ANSWERS', () => {
  it('part1 === 6443', () => {
    expect(sumOfYesAnswers(actual)).toBe(6443)
  })
  it('part2 === 3232', () => {
    expect(sumOfYesAnswers(actual, true)).toBe(3232)
  })
})


