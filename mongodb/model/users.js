const mongoose = require('mongoose')
const Schema = mongoose.Schema
    //创建规则
let userShchema = new Schema({
        name: { type: String, require: [true, 'name是必须的'] },
        passWord: { type: String, require: true }
    })
    //建表
const user = mongoose.model('user', userShchema)
module.exports = user