const getCollisions = (rows, ...slopes) =>
  slopes.reduce((sum, [xd, yd]) => sum *= rows.reduce((acc, row, index) =>
    (index % yd) ? acc : acc += row[index / yd * xd % row.length] === '#'
  , 0), 1)

module.exports = {
  getCollisions,
}