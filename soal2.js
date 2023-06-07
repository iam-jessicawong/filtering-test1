function printTriangle(start, rows) {
  if(isNaN(start) || isNaN(rows)) return 'must be a number';
  let str = "";

  for(let i = 1; i <= rows; i++) {
    for(let j = start; j < start + i; j++) {
      str += `${j} `;
    }
    start ++;
    str += "\n";
  }

  return str;
}

console.log(printTriangle(1, 7));
console.log(printTriangle(5, 7));