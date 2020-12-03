const { checkCollisions, sumCollisions } = require('./day3')
const { test, actual } = require('./inputs')
const part2_slopes = [
  [1,1],
  [3,1],
  [5,1],
  [7,1],
  [1,2],
]

describe('checkCollisions', () => {
  it('detects 7 trees', () => {
    const collisions = checkCollisions(test)
    expect(collisions).toBe(7)
  })

  it('part2 detects 336', () => {
    const sum = sumCollisions(test, part2_slopes)
    expect(sum).toBe(336)
  })
})

describe('ANSWER', () => {
  it('part1 === 259', () => {
    const collisions = checkCollisions(actual)
    expect(collisions).toBe(259)
  })

  it('part2 === 2224913600', () => {
    const sum = sumCollisions(actual, part2_slopes)
    expect(sum).toBe(2224913600)
  })
})

