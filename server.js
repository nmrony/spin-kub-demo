const connect = require("connect");
const serveStatic = require("serve-static");
connect()
  .use(serveStatic(__dirname))
  .listen(8000, () => console.log("Server started at http://0.0.0.0:8000"));
