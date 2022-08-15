const express = require('express')
const app = express()

app.use(express.static('./clock/'))
app.use(express.static('./files/'))
//挂载前缀，访问时路径要加上
app.use('/aaa',express.static('./clock/'))


app.listen(8080,(req,res) => {
    console.log('express server running....')
})

