const { runInstructions } = require('./day8')
const { part1, part2, actual } = require('./inputs')

describe('runInstructions', () => {
  it('runs until memory leak', () => {
    expect(runInstructions(part1)).toBe(5)
  })
  it('fixes a busted instruction set', () => {
    expect(runInstructions(part1, true)).toBe(8)
  })
})

describe('DAY 8 ANSWERS', () => {
  it('part1 === 2003', () => {
    expect(runInstructions(actual)).toBe(2003)
  })
  it('part1 === 1984', () => {
    expect(runInstructions(actual, true)).toBe(1984)
  })
})


