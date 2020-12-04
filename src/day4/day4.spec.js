const { checkPassports } = require('./day4')
const { test, actual } = require('./inputs')

describe('checkPassports', () => {
  it('finds 2 valid possports from sample', () => {
    expect(checkPassports(test)).toBe(2)
  })
})

describe('ANSWER', () => {
  it('part1 === 264', () => {
    expect(checkPassports(actual)).toBe(264)
  })

  it('part2 === 224', () => {
    expect(checkPassports(actual, { validation: true })).toBe(224)
  })
})

