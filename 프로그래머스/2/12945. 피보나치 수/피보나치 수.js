function solution(n) {
    let pibo = [0,1];
    
    for(let i=2; i<=n; i++){
        pibo.push((pibo[i-1] + pibo[i-2]) % 1234567)
    };
    
    return pibo[n]
}