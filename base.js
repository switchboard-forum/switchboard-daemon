import "net";
import "./config";


const host = config.host;
const port = config.port;

net.createServer(sock => {
  console.log("Connected to " + sock.remoteAddress + " on port " + sock.remotePort);

  sock.on("data", data => {
    allocate(JSON.parse(data));
  });
}).listen(port, host);
