// Node.js
// 可以让JavaScript在浏览器之外运行，如：
// 作为Web服务器的编程语言在服务器上运行
// 作为桌面应用的编程语言在各种系统中开发应用程序
// 开发手机App
// JS号称全栈编程语言

// require函数用来加载模块
// 模块默认保存位置是 node_modules 文件夹
var express = require('express');


// 调用上一步加载的express函数创建一个web应用（app对象）
var app = express();

// 调用app对象的use方法
// 调用 express 函数对象的static方法，
// 使wwwroot文件中的文件变成可以通过浏览器访问的静态资源
// 静态资源：浏览器直接下载即可使用，不需要服务端程序参与处理
// 比如图片、HTML文件、Js文件、CSS文件
app.use(express.static('wwwroot'))


// get 表示处理一个GET请求
// get 请求的数据是通过URL中的查询字符串传到服务器的
// 使用表单发起GET请求会导致页面刷新（实际上是打开了一个新页面）
app.get('/user', function(request, response){
    var name = request.query.name
    // request表示所有请求数据
    // query表示查询字符串
    // name表示查询字符串中名字为name的数据
    var age = request.query.age
    
    console.dir(request.query)
    
    response.status(200).send('<strong>你提交的数据是：</strong><br>' + 
        name + '<br>' + age)
    // response表示发送给浏览器的响应数据
    // status表示发送给浏览器状态码
    // send表示发送给浏览器的内容（响应体）
})

// listen监听指定的端口，当有请求到达时会转给上边的get、post等去处理
// 第1个参数是监听的端口号，没有被占用的端口号都可以使用
// 第2个参数是监听成功后的回调函数
app.listen(3000, function () {
    console.log('Node Server OK')
})

// 启动此web应用的方法是：
// 在命令行中执行（切换到当前文件夹）
// node app.js
// 停止web应用的方法是：
// 关掉命令行窗口  或者按   Ctrl + C