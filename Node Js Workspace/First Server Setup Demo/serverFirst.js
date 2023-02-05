const http = require('http');
const port = 2023;
const fs = require('fs');

// this function is used to print the url here by passing as parameter in http.createServer() function;
function requestHandler(req, res){
    console.log(req.url);
    
    res.writeHead(200, {'Content-type': 'text-html'});

    // to send the response to the webpage
    // this is not an ideal or appropriate way to write response, 
    // therefor we will create seperate html file and use it here
    // res.write('<h1>Response Send Successfully !<h1>');

    // this is seperate html file reading way
    // err is error and data is data we are getting from index.html
    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log(`Error Occured ${err}`);
            return res.end('<h1>Error Ocurred !<h1>')
        }
        return res.end(data);
    });
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