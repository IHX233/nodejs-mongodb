const mongoose = require('mongoose')
const Schema = mongoose.Schema
let articleSchema = new mongoose.Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'

    },
    content: String,
    date: {
        type: Date,
        default: Date.now()
    }
})
const article = mongoose.model('article', articleSchema)
module.exports = article