let a = { a: 1, b: 2, c: 3 }
let b = {}
for (var key in a) {
    b[key] = a[key]
}
b.b = 4
console.log(a, b)