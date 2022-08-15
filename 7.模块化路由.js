const express = require('express')
const app = express()

const router = require('./router.js')

app.use(router)

app.listen(8080,() => {
    console.log('express server running........')
})
