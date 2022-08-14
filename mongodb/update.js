const user = require('./model/user')
    // user.create({
    //     name: 'llll',
    //     passWord: '123',
    //     object: {
    //         gf: 'gf',
    //         ihx: 'ihx'
    //     },
    //     arr: [1, 2, 3]
    // })

//修改name为llll的password，一定要有回调函数或.then修改才会生效
// user.updateOne({ name: 'llll' }, { passWord: '777' }).then(data=>{
//     console.log(data)
// })

//修改对象的属性时要用$set，不然会将原对象全部覆盖
// user.updateOne({ name: 'llll' }, { $set: { 'object.gf': 'ihx' } }).then(data => {
//     console.log(data)
// })

//数组新增
// user.updateOne({ name: 'llll' }, { $push: { arr: '10' } }).then(data => {
//     console.log(data)
// })

//数组修改
// user.updateOne({ name: 'llll' }, { $set: { 'arr.0': 10 } }).then(data => {
//     console.log(data)
// })

// 添加一个数组
// user.updateOne({ name: 'llll' }, { $push: { arr: { $each: [1, 2, 3, 4, 5, 6, 7, 8] } } }).then(data => {
//     console.log(data)
// })

//数组剪切
// user.updateOne({ name: 'llll' }, { $push: { arr: { $each: [], $slice: 1 } } }).then(data => {
//     console.log(data)
// })

//数组中不存在该值则添加
// user.updateOne({ name: 'llll' }, { $addToSet: { arr: 99 } }).then(data => {
//     console.log(data)
// })

//删除数组中的项 -1删除第一项，1删除最后一项
// user.updateOne({ name: 'llll' }, { $pop: { arr: -1 } }).then(data => {
//     console.log(data)
// })

//删除数组中值为x的一项
user.updateOne({ name: 'llll' }, { $pull: { arr: x } }).then(data => {
    console.log(data)
})