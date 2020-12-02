const oldPolicy = ({ a, b, target, password }) => {
  const matches = password.replace(new RegExp(`[^${target}]`, 'g'), '').length
  return matches >= +a && matches <= +b
}

const newPolicy = ({ a, b, target, password }) =>
  (password[a - 1] === target) ^ (password[b - 1] === target)

const validPasswords = (passwords, policy) =>
  passwords.reduce((acc, entry) =>
    acc += policy(entry.match(/^(?<a>\d+)-(?<b>\d+)\s+(?<target>\w+).*?(?<password>\w+)$/).groups)
  , 0)

module.exports = {
  validPasswords,
  oldPolicy,
  newPolicy,
}