function solution(rank, attendance) {
    var answer = 0;
    const filter = [...rank].filter((el,i) => attendance[i]===true).sort((a,b)=>a-b);
    console.log(filter)

    answer += rank.indexOf(filter[0])*10000
    answer += rank.indexOf(filter[1])*100
    answer += rank.indexOf(filter[2])
    return answer;
}