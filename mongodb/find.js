let user = require('./model/user')
    //查找全部
    // user.find({}, (err, data) => {
    //     console.log(data)
    // })

//按条件查找
// user.find({name:'iii'}, (err, data) => {
//     console.log(data)
// })

//查找年龄大于等于33的
// user.find({ age: { $gte: 33 } }, (err, data) => {
//     console.log(data)
// })

//与查询数组中指定的值中的任何一个匹配
// user.find({ age: { $in: [33, 32] } }, (err, data) => {
//     console.log(data)
// })

//与查询数组中指定的值中的任何一个都不匹配
// user.find({ age: { $nin: [33, 32] } }, (err, data) => {
//     console.log(data)
// })

//$gte为大于等于33的，not反转，查找age小于33或name不存在的
// user.find({ age: { $not: { $gte: 33 } } }, (err, data) => {
//     console.log(data)
// })

//查找含name字段的
// user.find({ age: { $exists: true } }, (err, data) => {
//     console.log(data)
// })

//第二个参数设置哪些字段显示，值为1显示，为0不显示。age值为1，所以显示
// user.find({ age: { $exists: true } }, { age: 1 }, (err, data) => {
//     console.log(data)
// })

//第三个参数
// sort：按照排序规则根据所给的字段进行排序，值可以是 asc, desc, ascending, descending, 1, 和 -1。
// limit：指定返回结果的最大数量
// skip：指定要跳过的文档数量

user.find({ age: { $exists: true } }, { age: 1 }, { sort: { age: -1 } }, (err, data) => {
    console.log(data)
})