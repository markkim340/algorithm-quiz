function solution(my_string, is_suffix) {  
    const myStringArr = [...my_string]
    let suffixArr = []
    
    myStringArr.map((el,i) => {
        suffixArr.push(myStringArr.slice(i).join(''))
      
    })
    
    return suffixArr.includes(is_suffix) ? 1 : 0
}