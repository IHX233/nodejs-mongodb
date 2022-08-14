const express = require('express')
let router = express.Router()
router.get("/", (req, res) => {
    res.send("gf路由")
})
router.get('/js', (req, res) => {
    res.send('js内容')
})
router.get('/css', (req, res) => {
    res.send('css内容')
})
router.use('/ihx', require("./ihx"))
module.exports = router;