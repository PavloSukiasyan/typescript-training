// 'aba' -> True
// 'avv' -> False

function isMirrored(str: string): boolean {
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log('test1: ', isMirrored('aba'));
console.log('test2: ', isMirrored('abaX'));
console.log('test3: ', isMirrored('aba='));
console.log('test4: ', isMirrored('is si'));
console.log('test5: ', isMirrored('i i'));
console.log('test6: ', isMirrored('A'));
