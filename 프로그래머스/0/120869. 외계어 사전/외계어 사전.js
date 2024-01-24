function solution(spell, dic) {
  spell = spell.sort().join('')
  const result = dic.map(el=> el.split('').sort().join('')).find(el => el===spell) !== undefined ? 1 : 2;
  return result
}