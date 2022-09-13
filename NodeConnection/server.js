var http = require('http')

var url = require('url')

http.createServer(function(req,res){
    var route = req.url
    
    if(route==='/')
    {
        res.end('This info has been sent by the server')
    }
    if(route==='/getusername')
    {
       var username = ['messi','ronald','amit','om','pappu'] 
       res.end(JSON.stringify(username))
    }
    if(route ==='/admin')
    {
        res.end('This server is created by me')
    }

    console.log('My server started at localhost 3000')
}).listen(3000)