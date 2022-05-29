const process = require("process");

process.on("beforeExit", (code) => {
  // 이벤트 루프에 등록된 작업이 모두 종료되고, node프로세스가 종료되기 직전
  console.log("beforeExit", code);
});

// process(exit)  -> 밑에 코드가 있어도 바로 종료를 함

process.on("exit", (code) => {
  //모두 다 종료 될때 일어남
  console.log("exit이벤트 리스너", code);
});

console.log("출력");
