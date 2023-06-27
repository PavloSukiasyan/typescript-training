let promises = [1, 2, 3, 4, -1, -100];

async function main(promises: number[]) {
  let count = 0;
  for (const promiseValue of promises) {
    const promise = Promise.resolve(promiseValue); // Convert numbers into promises
    const value = await promise;
    if (value > 0) {
      count = count + value;
    }
  }
  console.log('sum:' + count);
}

main(promises);
