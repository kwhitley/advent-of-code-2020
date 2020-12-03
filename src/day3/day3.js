const getCollisions = (rows, ...slopes) =>
  slopes.reduce((sum, [xd, yd]) => sum *= rows.reduce((hits, row, index) =>
    index % yd ? hits : hits += row[index / yd * xd % row.length] === '#'
  , 0), 1)

module.exports = {
  getCollisions,
}