const mongoose = require('mongoose')
let userShchema = new mongoose.Schema({
    sex: {
        type: String,
        //性别为男或者女
        enum: ['男', '女']
    },
    pwd: {
        type: String,
        minlength: 6,
        maxlength: 16
    },
    user: {
        type: String,
        //正则
        match: /^\w{6,18}&/
    }
})