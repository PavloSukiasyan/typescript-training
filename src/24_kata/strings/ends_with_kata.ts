export function solution(str: string, ending: string): boolean {
  // if (str.endsWith(ending)) {
  //   return true;
  // } else {
  //   return false;
  // }

  return str.endsWith(ending) ? true : false;
}

console.log(solution('pavlo', 'pa'));
console.log(solution('pavlo', 'lo'));
console.log(solution('pavlo', 'pavlo'));
