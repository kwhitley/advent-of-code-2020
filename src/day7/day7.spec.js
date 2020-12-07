const {
  countChildBags,
  countParentBags,
} = require('./day7')
const { testRules, actualRules, part2testRules } = require('./inputs')

describe('countParentBags', () => {
  it('shiny gold bag may be found in 4 color bags', () => {
    expect(countParentBags(testRules)('shiny gold')).toBe(4)
  })
  it('part2 example 1 ', () => {
    expect(countChildBags(testRules)('shiny gold')).toBe(32)
  })
  it('part2 example 2', () => {
    expect(countChildBags(part2testRules)('shiny gold')).toBe(126)
  })
})

describe('DAY 7 ANSWERS', () => {
  it('part1 === 148', () => {
    expect(countParentBags(actualRules)('shiny gold')).toBe(148)
  })
  it('part1 === 24867', () => {
    expect(countChildBags(actualRules)('shiny gold')).toBe(24867)
  })
})


