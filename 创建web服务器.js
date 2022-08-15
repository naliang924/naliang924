//导入模块
const http = require('http')

const server = http.createServer()

server.on('request',function(req,res){
    console.log('web server')
})

server.listen(8080,function(){
    console.log("server runnning....")
})

