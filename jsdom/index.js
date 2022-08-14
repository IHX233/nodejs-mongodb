const request = require('request')
const { JSDOM } = require('jsdom')
request({
    method: 'GET',
    url: 'https://tieba.baidu.com/index.html',
    header: {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
    }
}, (err, res, body) => {
    let { window } = new JSDOM(body)
    let gf = window.document.querySelectorAll('.forum_name')
    let ll = window.document.getElementsByClassName('forum_name')
    console.log(gf, ll)
    gf.forEach(item => {
        console.log(item.innerHTML)
    })
})