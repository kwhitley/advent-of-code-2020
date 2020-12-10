const { part1 } = require('./day10')
const { example1, example2, actual } = require('./inputs')

describe('part1', () => {
  it('does a thing', () => {
    expect(part1(example1)).toBe(35)
    expect(part1(example2)).toBe(220)
  })
})
describe('part2', () => {
  // it('finds possible combinations of adapters', () => {
  //   expect(part1(example1, true)).toBe(8)
  // })
  // it('finds possible combinations of adapters', () => {
  //   expect(part1(example2, true)).toBe(19208)
  // })
})

describe('DAY 10 ANSWERS', () => {
  it('part1 === 1920', () => {
    expect(part1(actual)).toBe(1920)
  })
  // it('part2 === 1', () => {
  //   expect(part1(actual)).toBe(1)
  // })
})


