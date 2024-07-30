var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static('wwwroot'))

// app对象的use方法表示使用中间件
// 中间件是插入在请求响应过程中的一个处理程序
// 可以在处理请求之前预先处理数据或处理请求之后进行清理
// bodyParser的作用是将浏览器发送的请求体转换为body对象
// 供程序处理请求时使用
// urlencoded处理url编码的数据，通常是表单提交数据
// extended: true 表示使用一种更强大的url编码处理方式
// 可以处理比较复杂的数据
app.use(bodyParser.urlencoded({ extended: false }))

// post表示处理一个由浏览器发送过来post请求
// '/api/user'表示只处理发送到这个url的请求
// 第2个参数表示处理请求的函数
// function请求处理函数：
// req表示所有浏览器发送请求数据及相关信息（请求）
// res表示将要发送给浏览器的所有数据（响应）
app.post('/user', function (req, res) {
    // var name = req.query.name
    // var age = req.query.age
    // POST请求的数据不在查询字符串中，而是在请求体中！
    // 所以需要从请求体中获取数据
    // 从请求体中获取数据可以使用body-parser模块
    
    // 安装body-parser的方法是：
    // 在命令行中运行（确保已经切换到当前app的文件夹）
    // npm install body-parser --save
    // npm node package manager 即Node.js包管理器
    // install 安装
    // body-parser 要安装模块包
    // --save 将安装的模块包的名字保存到 package.json 文件中
    
    var name = req.body.name
    var age = req.body.age
    
    console.dir(req.body)
    
    res.status(200).send('<strong>你提交的资料是：</strong><br>' + name + '<br>' + age)
})

app.listen(3000, function () {
    console.log('Node Server OK')
})
