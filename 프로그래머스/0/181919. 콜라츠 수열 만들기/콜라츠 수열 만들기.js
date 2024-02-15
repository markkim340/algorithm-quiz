function solution(n){
  var answer = [n];
  let num = n; 
  
  while(true){
    n = collatz(n)
    answer.push(n)
    if(n === 1){
      break;
    }
  }
  
  return answer
}

function collatz(n){
  if(n%2 ===0){
    return n/2
  }else{
    return 3 * n + 1
  }
}


solution(10)