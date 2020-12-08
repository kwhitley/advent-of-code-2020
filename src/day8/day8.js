const runInstructions = (inputs = [], part2 = false) => {
  for (var index in inputs) {
    for (var operation of ['nop', 'jmp']) {
      let instructions = inputs
        .map(i => i.split(' '))
        .map(([op, value], i) =>
          (i === +index && op !== 'acc' && part2) ? [operation, value] : [op, value]
        )

      let cursor = 0, acc = 0, haveRun = new Set

      while (!haveRun.has(cursor) && instructions[cursor] && haveRun.add(cursor)) {
        let [ command, value ] = instructions[cursor]
        acc += command === 'acc' && +value
        cursor += command === 'jmp' ? +value : 1

        if (cursor === instructions.length) return acc
      }

      if (!part2) return acc
    }
  }
}

module.exports = { runInstructions }