const http = require("http");
const fs = require('fs');

http.createServer(function (req, res) {
	res.write("On the way to being a full stack engineer!");
	res.end();
}).listen(3000);
console.log(`Server started on port 3000`);
