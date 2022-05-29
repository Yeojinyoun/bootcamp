const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
);
console.log(myURL);
// 복잡한 url도 myURL를 사용하면 다 path을 해준다.
