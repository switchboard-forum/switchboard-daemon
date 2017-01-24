let net = require("net");
let config = require("./config");

let plugins = config.plugins.map(plugin => {
  return require(plugin);
});

const host = config.host;
const port = config.port;

let server = net.createServer(socket => {
  console.log("connected");

  socket.on("data", data => {
    console.log(data);
    let dataSerialized = JSON.parse(data);
    plugins.forEach(plugin => {
      dataSerialized = plugin.parse(dataSerialized);
    });
    socket.write(JSON.stringify(dataSerialized));
  });
});

server.listen(port, host);
