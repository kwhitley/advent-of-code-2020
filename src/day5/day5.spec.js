const { getSeatId, getMaxSeatId, findMySeat } = require('./day5')
const { test, actual } = require('./inputs')

describe('getSeatId', () => {
  it('does something', () => {
    expect(getSeatId('FBFBBFFRLR')).toBe(357)
    expect(getSeatId('BFFFBBFRRR')).toBe(567)
    expect(getSeatId('FFFBBBFRRR')).toBe(119)
    expect(getSeatId('BBFFBBFRLL')).toBe(820)
  })
})

describe('DAY 5 ANSWERS', () => {
  it('part1 === 947', () => {
    expect(getMaxSeatId(actual)).toBe(947)
  })

  it('part2 === 636', () => {
    expect(findMySeat(actual)).toBe(636)
  })
})


