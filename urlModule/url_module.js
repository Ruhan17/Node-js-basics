var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    var my_url = "https://www.youtube.com/watch?v=JWnpfkA6V2A&list=PLkyGuIcLcmx2qXaZkjCL8-P78i2J5rDOa&index=9";

    var my_url_obj = url.parse(my_url, true);

    var my_host_name = my_url_obj.host;
    var my_path_name = my_url_obj.pathname;
    var my_search_name = my_url_obj.search;

    res.writeHead(200, {'content-type':'text/html'});
    res.write(my_path_name);
    res.end();

});

server.listen(5050);
console.log("Server successfully running");