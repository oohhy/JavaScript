// 1번
const score = [10, 20, 30, 10, 20, 30, 40, 10];
var sum_score = 0;
for (let i = 0; i < score.length; i++) {
  sum_score += score[i];
}
console.log(sum_score / score.length);
//1번 in은 key를 순회함(key=index)
const score1 = [10, 20, 30, 10, 20, 30, 40, 10];
var sum_score1 = 0;
for (var i in score1) {
  sum_score1 += score1[i];
}
console.log(sum_score1 / score1.length);
// 1번 of는 value를 순환
const score2 = [10, 20, 30, 10, 20, 30, 40, 10];
var sum_score2 = 0;
for (var i of score2) {
  sum_score2 += i;
}
console.log(sum_score2 / score2.length);
//1-1번
const score3 = [10, 20, 30, 10, 20, 30, 40, 10];
var sum_score3 = 0;
for (var i of score3) {
  sum_score3 += i;
}
let avg = sum_score3 / score3.length;
const bunsan = [];
for (var j of score3) {
  if (i - avg > 0) {
    bunsan.push((i - avg) ** 0.5);
  } else if (i - avg < 0) {
    bunsan.push((avg - i) ** 0.5);
  } else {
    bunsan.push(0);
  }
}
console.log(bunsan);

// 2번
arr = "5, 4, 10, 2, 5".split(",");
sum = 0;
for (var i of arr) {
  sum += parseInt(i);
}
console.log(sum / arr.length);

//3번
