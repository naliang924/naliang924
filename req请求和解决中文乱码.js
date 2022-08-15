const http = require('http')
const server = http.createServer()
server.on('request',(req,res) =>{
    //获取访问url
    const url = req.url
    const method = req.method

    console.log("已在页面请求请求")

    // console.log("url是" +url,",方法是" + method)

    const str = `url是 ${url},方法是 + ${method}`

    //解决中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(str)

})

server.listen(8080,() => {
    console.log("你已创建web服务")
})