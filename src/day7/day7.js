const buildRuleMap = rules => {
  const map = { contains: {}, containedIn: {} }

  rules.forEach(rule => {
    const [ color, contains ] = rule.split(' bags contain ')
    map.contains[color] = map.contains[color] || []
    const bagsWithin = contains.match(/\d+\s.*?\sbag/g) || []

    bagsWithin.forEach(bagType => {
      const { count, col } = bagType.match(/(?<count>\d+)\s(?<col>.*?)\sbag/)?.groups || {}
      map.contains[color].push({ count: +count, color: col })
      map.containedIn[col] = map.containedIn[col] || new Set
      map.containedIn[col].add(color)
    })
  })

  return map
}

const countChildBags = rules => color => {
  const map = buildRuleMap(rules)
  const scan = (total, color) => {
    let entries = map.contains[color]

    for (entry of entries) {
      total += entry.count + entry.count * scan(0, entry.color)
    }

    return total
  }

  return scan(0, color)
}

const countParentBags = rules => color => {
  const map = buildRuleMap(rules)
  const scan = (set, color) => {
    for (var bagColor of map.containedIn[color] || new Set) {
      if (!set.has(bagColor)) {
        scan(set, bagColor)
      }
      set.add(bagColor)
    }

    return set
  }

  return scan(new Set, color).size
}

module.exports = {
  countChildBags,
  countParentBags,
}