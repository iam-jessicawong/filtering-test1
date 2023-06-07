function findTarget(arr, target) {
  if( !Array.isArray(arr) || isNaN(target) || arr.length === 0) return 'must be an array with at least one value and a number';

  for(let i=0; i<arr.length; i++) {
    if (arr[i] === Number(target)) return i;
  }

  return `target: ${target} tidak ditemukan`;
}

console.log(findTarget([1, 2, 4], 4));
console.log(findTarget([-1, 2 , 5, 6, 7], 6));