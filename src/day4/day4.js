const required_fields = [
  ['byr', v => v >= 1920 && v <= 2002],
  ['iyr', v => v >= 2010 && v <= 2020],
  ['eyr', v => v >= 2020 && v <= 2030],
  ['hgt', (v, num = parseInt(v)) => (v.endsWith('cm') && num >= 150 && num <= 193) ||
               (v.endsWith('in') && num >= 59 && num <= 76)],
  ['hcl', v => v.match(/^#[\da-f]{6}$/)],
  ['ecl', v => `amb blu brn gry grn hzl oth`.split(' ').includes(v)],
  ['pid', v => v.match(/^\d{9}$/)],
  ['pid', v => v.match(/^\d{9}$/)],
]

const checkPassports = (passports, validation = false) => passports.reduce((valid, passport) => {
  const fields = passport.split(/\s/).map(entry => entry.split(':'))
  return valid += required_fields.every(([field, validate]) => fields.find(([type, value]) => type === field && (!validation || validate(value))))
}, 0)

module.exports = {
  checkPassports,
}