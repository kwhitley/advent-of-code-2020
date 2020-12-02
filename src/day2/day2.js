const oldPolicy = ({ a, b, target, password }) => {
  const matches = password.replace(new RegExp(`[^${target}]`, 'g'), '').length
  return matches >= Number(a) && matches <= Number(b)
}

const newPolicy = ({ a, b, target, password }) =>
  ((password[a - 1] === target) + (password[b - 1] === target)) === 1

const validPasswords = (
  passwords = [],
  policy = oldPolicy,
) => passwords.reduce((acc, entry) => {
  const passwordParts = entry.match(/^(?<a>\d+)-(?<b>\d+)\s+(?<target>\w+).*?(?<password>\w+)$/).groups

  return acc += policy(passwordParts) ? 1 : 0
}, 0)

module.exports = {
  validPasswords,
  oldPolicy,
  newPolicy,
}