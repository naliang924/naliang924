//1.导包
const express = require('express')
//2.创建web服务器
const app = express()

//4.监听服务器get、post请求，并向客户端响应具体的内容
app.get('/user',(req,res) => {
    //调用express提供的send()方法,向客户端响应一个JSON对象
    res.send({name:'zhangsan',age:20,gender:'男'})
})

app.post('/user',(req,res) => {
     //调用express提供的send()方法,向客户端响应一个文本字符串
    res.send('请求成功')
})

app.get('/',(req,res) => {
    //通过req.query可以获取到客户端发送过来的查询参数
    //注意：默认req.query是一个空对象
    console.log(req.query)
    res.send(req.query)
})

app.get('/user/:id/:username',(req,res) => {
    //通过req.query可以获取到客户端发送过来的查询参数
    //注意：默认req.query是一个空对象
    console.log(req.params)
    res.send(req.params)
})

//3.启动web服务器
app.listen(8080,() => {
    console.log('express server running......')
})