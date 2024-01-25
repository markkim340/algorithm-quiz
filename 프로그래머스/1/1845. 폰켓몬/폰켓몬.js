function solution(nums) {
  const num = parseInt(nums.length/2);
  const poketmonNum = [...new Set(nums)].length
  
  return poketmonNum >= num ? num : poketmonNum
}