const exp = require('express')
// var表示变量，值是以改变的
// const表示常量，一旦赋值就不能再改变
// const是新特性，可以node中使用，但暂时不要在浏览器中使用
const bodyParser = require('body-parser')


const app = exp()
// 通过express框架创建web app

app.use(exp.static('public'))
// 让express框架帮我们处理静态文件请求
app.use(bodyParser.urlencoded({ extended: false }))



app.post('/user/login', (req, res) => {
    var phone = req.body.phone
    var password = req.body.password
    
    var result = password == '123456' ? '登录成功！' : '密码错误！'
    
    res.status(200).send(result)
})



app.listen(3000, () => {
    console.log('Node Web Server Is Running...')
})


// 以下两种写法等效，第一种写法使用了拉姆达运算符（λ）
// 都是匿名函数
// (a, b) => {
//     return a + b
// }

// function(a, b){
//     return a + b
// }
