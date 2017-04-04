let net = require("net");
let config = require("./config");

//let plugins = config.plugins.map(plugin => {
//  return require(plugin);
//});
let plugins = {};

config.plugins.forEach(plugin => {
    plugins[plugin.name] = require(plugin.file);

});

let filters = config.filters.map(filter => {
  return require(filter);
});

const host = config.host;
const port = config.port;

let server = net.createServer(socket => {
  console.log("connected");

  socket.on("data", data => {
    console.log(data);
    let dataSerialized = JSON.parse(data);
      if (dataSerialized.subject.indexOf('!!') == 0) {
        dataSerialized = plugins[dataSerialized.subject.slice(2)].parse(dataSerialized);
    } else {
        filters.forEach(filter => {
            dataSerialized = filter.parse(dataSerialized);
        });
    }
    socket.write(JSON.stringify(dataSerialized));
  });
});

server.listen(port, host);
