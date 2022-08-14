const fs = require('fs')
const PATH = require('path')

function m(path) {
    let stats = fs.statSync(path);
    if (stats.isDirectory()) {
        let fileList = fs.readdirSync(path);
        if (fileList.length) {
            fileList.forEach(filePath => {
                m(PATH.join(path, filePath))
            })
        }
        fs.rmdirSync(path)
    }
    if (stats.isFile()) {
        fs.unlinkSync(path)
    }
}
module.exports = m