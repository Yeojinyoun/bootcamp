console.log("hello world");

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러메세지 출력"));
console.error("에러메세지 출력");

const arr = [
  { name: "joh doe", email: "john@gmail.com" },
  { name: "mark", email: "mark@gmail.com" },
];

console.table(arr); //테이블형태로 좀 더 직관적으로 볼 수 있다.

const obj = {
  students: {
    grade1: { class1: {}, class2: {} },
    grade1: { class1: {}, class2: {} },
    taechers: ["john", "jeremy"],
  },
};

console.log(obj);
console.dir(obj, { depth: 1, colors: true });

console.time("func 1");
for (let i = 0; i < 999; i++) {} // 이코드가 실행하는데 소요간이 얼마나 걸렸나알게함.
console.timeEnd("func 1");
