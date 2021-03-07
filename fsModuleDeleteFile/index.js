var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    if(req.url="/"){
        //Code for both Synchronous & Asynchronous website here. Comment one process & run another
        //Asynchronous
        /*fs.unlink('demoNew.txt', function (error) {
            if(error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File Deletion failed');
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File Deletion successful');
                res.end();
            }
        });*/
        //Synchronous
        let error = fs.unlinkSync('home.html');
        if(error){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Deletion failed');
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Deletion successful');
            res.end();
        }
    }
});

server.listen(5050);
console.log("Successful");