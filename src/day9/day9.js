const findBreak = (input, preamble = 25) => {
  const feed = input.split('\n').map(Number),
        stack = feed.slice(0, preamble)
  let cursor = preamble - 1

  while (cursor++ <= feed.length) {
    const target = feed[cursor]
    let passed = false
    for (var i=0; i<stack.length; i++) {
      for (var j=0; j<stack.length; j++) {
        if (stack[i] + stack[j] === target) {
          passed = target
          break
        }
      }
    }
    if (!passed) return { target, feed }
    stack.push(target) && stack.shift()
  }
}

const findFix = (input, preamble = 25) => {
  const { feed, target } = findBreak(input, preamble)
  for (var start=0; start<=feed.length-2; start++) {
    for (var end=start+2; end<=feed.length; end++) {
      const set = feed.slice(start, end)
      if (set.reduce((acc, i) => acc += i, 0) === target) return Math.min(...set) + Math.max(...set)
    }
  }
}

module.exports = {
  findBreak,
  findFix,
}