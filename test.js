let p = new Promise((resolve, reject) => {
  // 비동기적으로 실행될 code작성
  resolve("hello world");
})
  .then((메세지) => {
    alert(메세지);
    return 메세지.split(" ")[0];
  })
  .then((메세지) => {
    throw Error("Error 발생!");
    return 메세지[0];
  })
  .then((메세지) => {
    alert(메세지);
    return 메세지;
  })
  .catch((메세지) => {
    alert("catch 실행");
  });
