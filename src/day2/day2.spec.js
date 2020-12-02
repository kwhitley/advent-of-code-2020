const { validPasswords, newPolicy } = require('./day2')
const values = require('./values').split('\n')

describe('validPasswords', () => {
  it('finds 2 valid in test set', () => {
    const example = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']
    expect(validPasswords(example)).toBe(2)
  })
})

describe('ANSWER', () => {
  it('part1 === 467', () => {
    expect(validPasswords(values)).toBe(467)
  })

  it('part2 === 59885340', () => {
    expect(validPasswords(values, newPolicy)).toBe(441)
  })
})

