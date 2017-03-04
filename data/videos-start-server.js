const PATH = 'data/videos.json';
const PORT = 2095;

let jsonServer = require('json-server');
let server = jsonServer.create();
let router = jsonServer.router(PATH);
let middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, function () {
  console.log(`JSON Server is running. http://localhost:${PORT}`);
});
