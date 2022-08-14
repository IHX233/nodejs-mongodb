const path = require("path")
console.log(__dirname, __filename)
    //拼接路径
let p = path.join(__dirname, "../module")
    //带解析的拼接路径
let f = path.resolve('a/b', '/c', 'd')
    //解析相对路径
let r = path.relative('/gf/1.js', '/gf/learning/2.js')
    //解析路径
let g = path.parse('www.gf.com?wd=123')
console.log(p, f, r, g)