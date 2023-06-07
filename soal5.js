function sumZero(nums) {
  if( nums.length === 0 ) return [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    let x = nums[i];

    while(l < r) {
      if (x + nums[l] + nums[r] === 0) {
        return [x, nums[l], nums[r]]
      } else if (x + nums[l] + nums[r] < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
}

console.log(sumZero([-1, 0, 1, 2, -1, 4]));
console.log(sumZero([2, 3, 4, -1, -2]));
console.log(sumZero([]));