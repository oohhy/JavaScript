const array = [1, 3, 4, 8, 13, 17, 20];
const sort_array = [];
for (let i = 0; i < array.length - 1; i++) {
  sort_array.push(array[i + 1] - array[i]);
}
const index = sort_array.indexOf(Math.min(...sort_array));
console.log(`(${array[index]},${array[index + 1]})`);
