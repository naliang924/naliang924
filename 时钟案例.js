//导入模块
const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

//定义正在表达式,匹配<style></style>，<script></script>
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//读取文件
fs.readFile(path.join(__dirname,'./素材/index.html'),'utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败' + err.message)
    }
    console.log('文件读取成功')

    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)

})

//定义处理css样式的方法
function resolveCSS(htmlStr){
    //使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    //将提取的样式字符串进行replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    //将提取的样式写入文件中
    fs.writeFile(path.join(__dirname,'/clock/index.css'),newCSS,function(err){
        if(err){
            return console.log('写入文件失败',err.message)
        }
        console.log('CSS写入文件成功')
    })
    
}

//定义处理js脚本的方法
function resolveJS(htmlStr){
        //使用正则提取需要的内容
        const r1 = regScript.exec(htmlStr)
        //将提取的样式字符串进行replace替换操作
        const newJS = r1[0].replace('<script>','').replace('</script>','')
        //将提取的样式写入文件中
        fs.writeFile(path.join(__dirname,'/clock/index.js'),newJS,function(err){
            if(err){
                return console.log('写入文件失败',err.message)
            }
            console.log('JS写入文件成功')
        })

}

function resolveHTML(htmlStr){
    //将内嵌的样式和脚本替换成外联
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css" />').replace
    (regScript,'<script src="./index.js"></script>')
    //写入index.html
    fs.writeFile(path.join(__dirname,'/clock/index.html'),newHTML,function(err){
        if(err){
            return console.log('html写入文件失败' + err.message)
        }
        console.log('html写入文件成功')
    })


}