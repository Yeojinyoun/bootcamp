const path = require("path");
// path는 현재 구동되는 파일의 위치 경로, 환경변수의 대한 정보, 우리가 원하는 파일 정보를 컨트롤 할때 쓰는 함수
// 파일경로를 컨틀로 할 수 있는 내장객체

console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename)); //최종파일 이름을 알려준다
console.log(path.basename(__filename, ".js")); //확장자를 적어주면 확장파일을 제외한순수파일면만 알려준다
console.log(path.extname("index.html")); //확장자만 알려준다.

// index.html
// const filename="index.html"
// filename.substring(filename.indexOf(".")) //path를 사용하면 이렇게 안해도 됨

console.log(path.parse("/home/user/dir/file.txt"));
// 바로 오브젝트형태로 확장자,확장자를 뺀 파일,실제파일명,ㄷㅣ렉토리를 읽을 수 있게해줌
// 별로 쓰지는 않는다..아마도..
