const findProductOfSumTarget = (values = [], target = 2020, numbers = 2) => {
  const sorted = values.sort((a, b) => a < b ? -1 : (a > b ? 1 : 0))

  for (var a of sorted) {
    for (var b of sorted) {
      if (numbers === 3) {
        for (var c of sorted) {
          if (a + b + c === target) return a * b * c
          if (a + b + c > target) continue
        }
      } else {
        if (a + b === target) return a * b
        if (a + b > target) continue
      }
    }
  }
}

module.exports = {
  findProductOfSumTarget,
}