const fs = require('fs')
const http = require('http')
const path = require('path')

//创建web服务器
const server = http.createServer()
//监听web服务器的request事件
server.on('request',(req,res) => {
    //获取到客户端请求url地址
    const url = req.url
    //把url地址转换为具体本地存放路径
    //const fpath = path.join(__dirname,url)
    //优化
    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname,'./clock/index.html')
    }else{
        fpath = path.join(__dirname,'/clock',url)
    }

    //根据获得的文件路径读取文件的内容
    fs.readFile(fpath,'utf-8',(err, datasvr) => {
        if(err){
            return res.end('404 page not found')
        }

        res.end(datasvr)

    })

    // const str = '<h1>你好<h1>'
    // res.setHeader('Content-Type','text/html; charset=utf-8')
    // res.end(str)
})

//启动web服务器
server.listen(8080)
