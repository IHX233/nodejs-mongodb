const fs = require('fs')
const path = require('path')
let p = path.join(__dirname, "1.txt")
fs.readFile(p, "utf-8", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
    /*
    node的异步api都必须有回调函数
    异步api的回调函数的第一个形参，都是错误对象
    异步api基本上都有同步api，加sync

    */