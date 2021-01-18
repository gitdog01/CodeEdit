import * as http from "http";

console.log("hello");

const server = http.createServer((request, response) => {
  console.log("create");
});
server.listen(3000);
