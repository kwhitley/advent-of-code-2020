const { findBreak, findFix } = require('./day9')
const { part1, part2, actual } = require('./inputs')

describe('findBreak', () => {
  it('finds the break', () => {
    expect(findBreak(part1, 5).target).toBe(127)
  })
  it('finds the fix', () => {
    expect(findFix(part1, 5)).toBe(62)
  })
})

describe('DAY 9 ANSWERS', () => {
  it('part1 === 90433990', () => {
    expect(findBreak(actual, 25).target).toBe(90433990)
  })
  it('part2 === 11691646', () => {
    expect(findFix(actual, 25)).toBe(11691646)
  })

})


