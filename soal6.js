function plusOneDigit(nums) {
  const total = nums.reduce((prev, curr) => (prev * 10) + curr, 0) + 1;
  return [...total.toString()].map(Number);
}

console.log(plusOneDigit([1, 2, 3]));
console.log(plusOneDigit([4, 3, 2, 1]));
console.log(plusOneDigit([9]));