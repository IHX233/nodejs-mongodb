const fs = require('fs')
const path = require('path')
fs.readdir(__dirname, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})