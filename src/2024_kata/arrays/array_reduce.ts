const add = (...numbers: number[]) => {
  return numbers.reduce((currentVal, val) => {
    return currentVal + val;
  }, 0);
};

console.log(add(1, 2, 3, 4, 5));
