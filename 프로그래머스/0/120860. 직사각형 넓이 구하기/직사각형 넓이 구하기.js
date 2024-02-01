function solution(dots) {
    const xArr = dots.map(el=>el[0]);
    const yArr = dots.map(el=>el[1]);
    
    const x = Math.abs(Math.max(...xArr)-Math.min(...xArr));
    const y = Math.abs(Math.max(...yArr)-Math.min(...yArr));
  
    return x*y
}
