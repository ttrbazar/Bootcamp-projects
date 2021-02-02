const http = require("http");
const server = http.createServer((request, response) => {

    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    if (request.url === "/") {
        response.write("<h3>This is home page.</h3>");
    } else if (request.url === "/admin") {
        response.write("<h3>This is admin page.</h3>");
    } else if (request.url === "/student") {
        response.write("<h3>This is student page.</h3>");
    } else if (request.url === "/json") {
        response.writeHead(200, {"content-type": "application/json"});
        response.write(JSON.stringify({message: "This is json page"}));
    } else {
        response.write("<h3>This is error page</h3>");
    }
    response.end();
});

console.log("Server is working on 5000 port");
server.listen(5000);