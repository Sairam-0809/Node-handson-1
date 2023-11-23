


const http = require('http')
const jsonData = require('./jsonPackage')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("<title>Node handson-one</title> <p>Node js is a javascript runtime envirnoment that executes on server.</p> <h1>this is my HTTP home server</h1>")
        res.write("<p>Benefits of Node js</p>  <ol><li>High Performance</li><li>Cose Effect</li></ol>")
        res.end()
    }else if(req.url === '/jsondata'){
        const jsonStore = JSON.stringify(jsonData)
        // res.write(jsonData)
        res.write(jsonStore)
        res.end()
    }else if(req.url === '/student'){
        res.write("<h1>this is my HTTP student page</h1>")
        res.end()
    }else{
        res.write("<h2>404 Error</h2>")
        res.end()
    }
})

server.listen(5050, ()=>{
    console.log("server loaded...");
})