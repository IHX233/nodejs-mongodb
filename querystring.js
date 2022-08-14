const querystring = require("querystring")
    //将search转成对象
let parse = querystring.parse("?videoId=105447&classId=7569&playback=1")
    //和上面api作用相反
let stringfy = querystring.stringify(parse)
console.log(parse, stringfy)