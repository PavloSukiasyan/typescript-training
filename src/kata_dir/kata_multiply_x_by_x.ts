export function multiplicationTable(size: number): number[][] {
  const table: number[][] = [];

  for (let i = 1; i <= size; i++) {
    const row: number[] = [];

    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }

    table.push(row);
  }

  return table;

}

console.log(multiplicationTable(3));
console.log(multiplicationTable(5));