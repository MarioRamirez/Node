var server = require("./server.js");
var router = require("./router");
var requestHandlers = require("./requestHandlers.js");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);