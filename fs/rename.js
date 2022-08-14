const fs = require('fs')
const path = require('path')
const old = path.join(__dirname, '1.txt')
const newf = path.join(__dirname, '2.txt')
fs.rename(old, newf, () => {})
    //移动文件并重命名