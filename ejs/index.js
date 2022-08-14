const express = require('express')
let app = express()
app.listen(2444)
app.set('view engine', 'ejs')
    // app.use('/:name', (req, res) => {
    //     let data = {
    //         hb: {
    //             name: '猴憋',
    //             sex: '男',
    //             address: '江西'
    //         },
    //         yt: {
    //             name: '丫头',
    //             sex: '女',
    //             address: '江西'
    //         }
    //     }
    //     let info = data[req.params.name]
    //     res.render('user', info)
    // })
app.use('/teacher', (req, res) => {
    res.render('teacher')
})
app.use('/content', (req, res) => {
    res.render('content')
})