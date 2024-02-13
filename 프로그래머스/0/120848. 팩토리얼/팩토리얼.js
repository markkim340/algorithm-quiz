function solution(n) {
    var result = 1;
    var count = 0;
    
    while(true){
        count++
        result = result * count
        
        if(result > n){
            break;
        }
    }
    
    return count-1
}