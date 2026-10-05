const http= require('http');
http.createServer((req,res) =>
{
    if(req.method==='GET'){
        res.writeHead(200,
            {'Content-Type': 'application/ json'}
        );

        res.end(JSON.stringify({message: "Hello world"}));
    }

}).listen(3000);