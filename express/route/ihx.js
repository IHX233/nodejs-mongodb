const express = require('express')
let router = express.Router()
router.get("/", (req, res) => {
    res.send("ihx路由")
})
router.get('/ll', (req, res) => {
    res.send('ll内容')
})
router.get('/nn', (req, res) => {
    res.send('nn内容')
})
module.exports = router;