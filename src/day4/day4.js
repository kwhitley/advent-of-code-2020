const required_fields = [
  ['byr', v => 1920 <= v & v <= 2002],
  ['iyr', v => 2010 <= v & v <= 2020],
  ['eyr', v => 2020 <= v & v <= 2030],
  ['hgt', (v, num = parseInt(v)) => (v.endsWith('cm') && 150 <= num & num <= 193) ||
               (v.endsWith('in') && 59 <= num & num <= 76)],
  ['hcl', v => v.match(/^#[\da-f]{6}$/)],
  ['ecl', v => `amb blu brn gry grn hzl oth`.split(' ').includes(v)],
  ['pid', v => v.match(/^\d{9}$/)],
  ['pid', v => v.match(/^\d{9}$/)],
]

const checkPassports = (passports, validation = false) =>
  passports.reduce((valid, passport) => {
    return valid += required_fields.every(
      ([field, validate]) =>
        passport
          .split(/\s/)
          .map(entry => entry.split(':'))
          .find(([type, value]) => type === field && (!validation || validate(value))
      ))
  }, 0)

module.exports = {
  checkPassports,
}