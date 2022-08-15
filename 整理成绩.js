//导入fs模块
const fs = require('fs')

fs.readFile('../素材/成绩.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败' + err.message)
    }
    console.log('读取文件成功' + dataStr)

    //接收读取的数据
    const arrOld = dataStr.split(' ')
    console.log(arrOld)
    //把=号替换成：
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=','：'))
    })

    console.log(arrNew)
    //换行
    const newStr = arrNew.join('\n')
    console.log(newStr)

    //整理成绩写入文件
    fs.writeFile('../素材/成绩整理.txt',newStr,function(err){
        if(err){
            return console.log('写入文件失败' + err.message)
        }
        console.log('写入文件成功')
    })
})