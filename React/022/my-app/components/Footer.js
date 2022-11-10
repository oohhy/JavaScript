function solution(money) {
  var answer = [];
  var coffee = parseInt(money / 5500);
  answer.push(coffee);
  answer.push(money - coffee * 5500);
  return answer;
}
