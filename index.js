"use strict";
exports.__esModule = true;
var http = require("http");
console.log("hello");
var server = http.createServer(function (request, response) {
    console.log("create");
});
server.listen(3000);
