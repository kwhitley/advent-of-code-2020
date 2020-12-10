const findGaps = input => input
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b)
  .map((n, i, arr) => n - (arr[i - 1] || 0))

const part1 = (input, part2 = false) => {
  const gaps = [ ...findGaps(input), 3 ]

  if (!part2) return (gaps.filter(v => v === 1).length * gaps.filter(v => v === 3).length)
}

module.exports = {
  part1,
}