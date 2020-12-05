const getSeatId = (code = '') =>
  parseInt(code.slice(0,7).replace(/F/g, '0').replace(/B/g, '1'), 2) * 8 +
  parseInt(code.slice(-3).replace(/L/g, '0').replace(/R/g, '1'), 2)

const getMaxSeatId = codes =>
  codes.reduce((acc, code) => Math.max(acc, getSeatId(code)), 0)

const findMySeat = codes =>
  codes
    .map(getSeatId)
    .sort((a, b) => a < b ? -1 : (a > b ? 1 : 0))
    .reduce((myseat, id, index, ids) =>
      myseat || (id - ids[index-1]) > 1 && (id-1)
    , undefined)

module.exports = {
  findMySeat,
  getSeatId,
  getMaxSeatId,
}