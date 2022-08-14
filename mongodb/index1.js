const mongoose = require('mongoose')
const users = require('./model/users')
const article = require('./model/article')
mongoose.connect('mongodb://admin:123456@localhost:27017/ihx?authSource=admin').then(() => {
        console.log('连接成功')
    })
    .catch((err) => {
        console.log(err)
    })

// users.create({ name: '111', passWord: '111' }, { name: '222', passWord: '222' }, { name: '333', passWord: '333' })

// article.create({
//     title: 'first article',
//     author: '62f8f1686cb99455b1c01b89',
//     content: 'i am so happy'
// })

article.find({}).populate("author").then(data => {
    console.log(data)
})