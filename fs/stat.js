const fs = require('fs')
const path = require('path')
const p = path.join(__dirname, '2.txt')
fs.stat(p, (err, stats) => {
    console.log(stats)
    console.log(stats.isDirectory())
    console.log(stats.isFile())
})