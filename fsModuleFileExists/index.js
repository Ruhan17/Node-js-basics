var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    if(req.url="/"){
        //Code for both Synchronous & Asynchronous website here. Comment one process & run another
        //Asynchronous
        fs.exists('demoNew1.txt', function (result) {
            if(result){
                res.end("File exists");
            }
            else{
                res.end("File does not exist");
            }
        });
        //Synchronous
        /*let result = fs.existsSync('demo.txt');
        if(result){
            res.end("True");
        }
        else{
            res.end("False");
        }*/
    }
});

server.listen(5050);
console.log("Successful");