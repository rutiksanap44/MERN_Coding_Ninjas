const http = require('http');
const port = 2023;

const server = http.createServer();

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(`Server is Created and Running on the Port : ${port}`);
    }
})