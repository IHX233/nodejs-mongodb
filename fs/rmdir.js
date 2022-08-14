const fs = require('fs')
const path = require('path')
fs.rmdir(__dirname, (err) => {
        console.log(err)
    })
    //不能删除非空目录