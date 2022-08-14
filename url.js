const { URL } = require('url')
    //解析url
let u = new URL("https://www.shiguangkey.com/video/4996?videoId=105447&classId=7569&playback=1")
console.log(u)
console.log(u.searchParams)