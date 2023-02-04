const http = require('http');
const port = 2023;

// this function is used to print the url here by passing as parameter in http.createServer() function;
// request and response
function requestHandler(req, res){
    console.log(req.url)
}

// to create server
const server = http.createServer(requestHandler);

// server that listens
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(`Server is Created and Running on the Port : ${port}`);
    }
})