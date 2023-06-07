function minMaxArray(nums) {
  if ( !Array.isArray(nums) ) return;
  const minmax = {
    min: nums[0],
    max: nums[0]
  }

  for (let i = 1; i < nums.length; i++) {
    if ( nums[i] < minmax.min ) {
      minmax.min = nums[i];
      continue;
    }
    
    if ( nums[i] > minmax.max ) minmax.max = nums[i];
  }

  return `min = ${minmax.min}, max = ${minmax.max}`
}

console.log(minMaxArray([2,3,4,5,6,7,8,9,1,10]));