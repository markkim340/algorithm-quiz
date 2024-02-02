function solution(order) {
    const latteCount = order.filter(el => el.includes('latte')).length;
    const answer = order.length * 4500 + latteCount * 500
    
    return answer;
}