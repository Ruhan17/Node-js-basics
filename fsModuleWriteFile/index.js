var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    if(req.url="/"){
        //Code for both Synchronous & Asynchronous website here. Comment one process & run another
        //Asynchronous
        /*fs.writeFile('demo.txt', 'Welcome to Node js', function (error) {
            if(error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File writing failed');
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File writing successful');
                res.end();
            }

        });*/
        //Synchronous
        let error = fs.writeFileSync('demoSync.txt', 'Welcome to File Sync');
        if(error){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File writing failed');
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File writing successful');
            res.end();
        }
    }
});

server.listen(5050);
console.log("Successful");