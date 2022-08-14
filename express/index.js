const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
let app = express()
let router = express.Router()
app.listen(2333)
    //中间件，不用next的话，只能走一条中间件
app.use('/', (req, res, next) => { //从根路径出发的请求都被该中间件处理，因为路由为/    get,post也行,但是没有意义
    //对req，res进行处理
    req.gf = 'lll'
        //next执行，表示中间件处理完了，程序可以往下走了
    next()
})
app.use('/g', (req, res) => { //监听get，只有前端get请求会被响应，app.use可以都监听
    //res.send(" <!DOCTYPE html><html><head><title> express </title> </head> <body>express </body> </html>")
    //res.sendFile(__dirname + '/user/index.html')
    res.send(req.gf)
})
app.use('/gf', require('./route/gf'))

//默认中间件，对数据格式进行处理
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use('/', (req, res) => {
    console.log(req.body) //保存post发过来的数据
    console.log(req.query) //保存get发过来的数据
    res.send('copy')
})