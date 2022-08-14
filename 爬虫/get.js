const download = require('./index')
const path = require('path')
download({
    word: '风鹰侠',
    num: '50',
    path: path.join(__dirname, 'img')
})