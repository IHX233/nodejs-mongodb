const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:123456@localhost:27017/ihx?authSource=admin').then(() => {
        console.log('连接成功')
    })
    .catch((err) => {
        console.log(err)
    })
const Schema = mongoose.Schema
    //创建规则
let userShchema = new Schema({
        name: { type: String, require: [true, 'name是必须的'] },
        passWord: { type: String, require: true },
        age: Number,
        info: { type: String, default: '这个人什么都没留下', },
        object: {
            gf: String,
            ihx: String
        },
        arr: []
    }, {
        versionKey: false //去掉默认_v字段,_v为每条数据的版本号
    })
    //建表
const user = mongoose.model('user', userShchema)
module.exports = user