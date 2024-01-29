function solution(n, lost, reserve) {
  const ableToLend = reserve
    .filter((res) => lost.indexOf(res) === -1)
    .sort((a, b) => a - b);
  const wantToBorrow = lost
    .filter((lose) => reserve.indexOf(lose) === -1)
    .sort((a, b) => a - b);

  return (
    n -
    wantToBorrow.filter((lose) => {
      const target = ableToLend.find((res) => Math.abs(res - lose) === 1);
      if (!target) return true;
      ableToLend.splice(ableToLend.indexOf(target), 1);
    }).length
  );
}