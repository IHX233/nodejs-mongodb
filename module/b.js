exports.a = 10
exports.b = 20
    //真正导出的是module.exports 而exports和module.exports是引用关系，所以下面的写法是不对的

// let a = 10
// let b = 20

// exports ={a,b}