// const num = Array(10000)
//   .fill()
//   .map((v, i) => i + 1);
// const num_spread = num.join("");

// let arr1 = [];
// for (let i = 0; i < num_.length; i++) {
//   if (num_spread[i] === "8") {
//     arr1.push(num_spread[i]);
//   }
// }
// console.log(arr1.length);

const arr = Array(10000)
  .fill(0)
  .map((v, i) => {
    i + 1;
  })
  .join("")
  .match(/8/g).length;
console.log(arr);
