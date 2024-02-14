function solution(num, total) {
    var answer = [];
    
    const medianNumber = Math.floor(total/num)
    answer.push(medianNumber)
  
    let plusNumber = medianNumber
    let minusNumber = medianNumber
    
    const arrHalfLength = Math.floor((num-1)/2);
    
    for(let i=0; i<arrHalfLength; i++){
      plusNumber++ 
      minusNumber--
      
      answer.push(plusNumber)
      answer.push(minusNumber)
    }
   
    answer.sort((a,b) => a-b);
  
    if(answer.length === num){
      return answer
    }else{
      const lastNumber = answer[answer.length-1]
      answer.push(lastNumber+1)
      
      return answer
    }
  
}