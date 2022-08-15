//1、导入fs模块，操作文件

const fs = require('fs')

//2、读取文件内容

fs.readFile('../files/1.txt','utf8',function(err,dataStr){
    console.log(err)
    if(err){
        return console.log("文件读取失败，" + err.message)
    }
    console.log("文件读取成功，" + dataStr)
})
