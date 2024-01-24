function solution(spell, dic) {
  const isSameExist = dic.filter(str => str.length === spell.length).map(el => el.split('').sort().join(''));
  
  if(isSameExist === spell.sort().join('')){
    return 1
  }else return 2
}