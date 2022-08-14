const user = require('./model/user')
const express = require('express')
const path = require('path')
let app = express()
app.listen('2333')
app.use('/', express.static(path.join(__dirname, './static')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/regist', (req, res) => {
    let data = {...req.body, ...req.query }
    let userData = {
        name: data.name,
        passWord: data.password,
        age: data.age,
        info: data.info

    }
    console.log(userData)
    user.create(userData)
    res.send('上传成功')
})