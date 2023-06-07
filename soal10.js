function sisipInteger(nums, target) {
  target = Number(target);
  if( !Array.isArray(nums) || !target ) return;

  nums.push(target);
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
      const temp = nums[i];
      nums[i] = nums[i+1];
      nums[i+1] = temp;
      
      i = -1
    }
  }

  return nums;
}

console.log(sisipInteger([4,7,1,20], 9));
console.log(sisipInteger([3,5,2], 7));
console.log(sisipInteger([2,14,10,1,11,12,3,4], 7));