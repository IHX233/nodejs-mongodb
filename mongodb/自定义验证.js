const mongoose = require('mongoose')
let userShchema = new mongoose.Schema({
    pwd: {
        type: String,
        validate: {
            validator: value => {
                //value为要验证的值，函数返回true验证通过，返回false验证不通过
            }
        },
        message: 'user没通过验证'
    }
})