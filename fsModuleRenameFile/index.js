var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    if(req.url="/"){
        //Code for both Synchronous & Asynchronous website here. Comment one process & run another
        //Asynchronous
        fs.rename('demoNewNew.txt', 'demoNew.txt', function (error) {
            if(error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File Renaming failed');
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File Renaming successful');
                res.end();
            }
        });
        //Synchronous
        /*let error = fs.renameSync('demoNew.txt', 'demoNewNew.txt');
        if(error){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Renaming failed');
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Renaming successful');
            res.end();
        }*/
    }
});

server.listen(5050);
console.log("Successful");