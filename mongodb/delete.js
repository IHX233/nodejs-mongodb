let user = require('./model/user')
user.deleteOne({ name: 'kkk' }).then(() => { //deleteMany删除满足条件的所有数据
    console.log('删除成功')
}).catch((err) => {
    console.log(err)
})