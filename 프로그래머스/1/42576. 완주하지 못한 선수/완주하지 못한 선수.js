function solution(participant, completion) {
  let answer;
  let hashMap = new Map();
  
  participant.forEach(el => {
    if(hashMap.has(el)){
      hashMap.set(el, hashMap.get(el)+1)
    } else
    hashMap.set(el,1)
  })
  
  completion.forEach(el => {
    if(hashMap.has(el)){
      hashMap.set(el, hashMap.get(el)-1)
    }
  })
  
  for(let [key,value] of hashMap){
    if(value == 1){
      answer = key 
    }
  }
  
  return answer
}