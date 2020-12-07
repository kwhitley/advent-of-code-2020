const sumOfYesAnswers = (groups = [], everyone = false) =>
  groups.reduce((acc, group) => {
    const yes = {}
    const people = group.split('\n')

    people.forEach(person =>
      person.split('').forEach(question => {
        yes[question] = yes[question] || 0
        yes[question]++
      })
    )

    return acc += everyone
    ? Object.values(yes).reduce((acc, answers) => acc += answers === people.length, 0)
    : Object.keys(yes).length
  }, 0)

module.exports = {
  sumOfYesAnswers,
}