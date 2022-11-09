function solution(array, height) {
  var count = 0;
  // [192, 180, 170, 149] 167
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      count += 1;
    }
  }
  return count;
}
