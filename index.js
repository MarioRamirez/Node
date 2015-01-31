var server = require("./server.js");
var router = require("./router");

server.iniciar(router.route);