const fs = require('fs')
const path = require('path')
let p = path.join(__dirname, "1.txt")
fs.unlink(p, () => {})