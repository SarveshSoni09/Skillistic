const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Set the target URL of the proxy server
  const target =
    "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5";

  // Forward the request to the target URL
  proxy.web(req, res, { target });
});

server.listen(3000, () => {
  console.log("Proxy server listening on port 3000");
});
