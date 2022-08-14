const { default: mongoose } = require("mongoose");

let userShchema = new mongoose.Schema({
    age: {
        type: Number,
        min: [18, '你未满18岁'],
        max: 99
    }
})