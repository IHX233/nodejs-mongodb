const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
let app = express()
let router = express.Router()
app.listen(2333)

//开放静态资源的中间件
app.use('/', express.static(path.join(__dirname, './user')))
    //req.params
app.use('/use/:name', (req, res) => {
        console.log(req.params)
    })
    //重定向
app.use((req, res) => {
    res.redirect('/404.html')
})