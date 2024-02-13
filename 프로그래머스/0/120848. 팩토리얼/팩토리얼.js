function solution(n) {
    var answer = 1;
    var result = 0;
    
    while(true){
        result++
        answer = answer * result
        if(answer > n){
            break;
        }
    }
    
    return result-1
}