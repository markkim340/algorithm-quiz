function solution(answers) {
  const case1 = [1, 2, 3, 4, 5];
  const case2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const case3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  const filter = (caseArr) => {
    return answers.filter((el,i) => el === caseArr[i%caseArr.length]).length
  }
  
  const currectCount = []
  currectCount.push(filter(case1));
  currectCount.push(filter(case2));
  currectCount.push(filter(case3));
  const maxNum = Math.max(...currectCount)
  
  const result = []
  for(let i=0; i<currectCount.length; i++){
    if(currectCount[i] === maxNum){
      result.push(i+1)
    }
  }
  
  return result
}