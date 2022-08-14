const fs = require('fs')
const path = require('path')
let p = path.join(__dirname, "1.txt")
fs.writeFile(p, " 不，你不想", { flag: "a+" }, () => {})
    //flag默认覆盖，a+为追加