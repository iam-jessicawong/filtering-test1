function isPalindrome(arr) {
  if ( !Array.isArray(arr) || arr.length === 0 ) return;

  if ( arr.length === 1) return true;
  for (let i = 1; i <= arr.length/2; i++) {
    let isSame = arr[i-1].toLowerCase() === arr[arr.length - i].toLowerCase();
    if ( !isSame ) return false;
  }

  return true;
}

console.log(isPalindrome(["asep", "budi", "-", "budi", "asep"]));
console.log(isPalindrome(["Tom", "Tim", "tim", "tom"]));
console.log(isPalindrome(["tik", "tok", "toko", "tik"]));