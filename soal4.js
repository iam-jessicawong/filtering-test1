function addSum(nums, target) {
  if( !Array.isArray(nums) || isNaN(target) || nums.length <= 1 ) return 'invalid input';
  
  const elements = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if(diff in elements) return [elements[diff], i]

    elements[nums[i]] = i;
  }

  return `array don't have the sum for target`;
}

console.log(addSum([2, 7, 11, 15], 9));
console.log(addSum([3, 2, 3], 6));
console.log(addSum([3, 2, 4], 6));
console.log(addSum([3, 3], 6));
