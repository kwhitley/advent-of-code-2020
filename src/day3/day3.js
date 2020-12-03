const checkCollisions = (rows, xd = 3, yd = 1) =>
  rows.reduce((collisions, row, index) => (index % yd)
    ? collisions
    : collisions += row[index / yd * xd % row.length] === '#'
  , 0)

const sumCollisions = (rows, slopes) =>
  slopes.reduce((sum, slope) => sum *= checkCollisions(rows, ...slope), 1)

module.exports = {
  checkCollisions,
  sumCollisions,
}