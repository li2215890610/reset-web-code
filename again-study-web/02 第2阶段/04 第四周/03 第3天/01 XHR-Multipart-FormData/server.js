var express = require('express')
var bodyParser = require('body-parser')
// multer模块可以处理以formdata形式提交的数据
// 还可以处理上传的文件
var multer = require('multer')

var app = express()
// 实例化一个multer以便后续使用
var form = multer()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/comment', (req, res)=>{
    console.log('收到了GET请求：' + JSON.stringify(req.query))
    res.status(200).send('感谢您的评价！')
})

// 参数2：表示在正式处理请求之前处理以formdata方式提交的数据
// 如果发现formdata提交的数据，会把这些数据提出出来放入req.body对象中
app.post('/comment', form.array(), (req, res)=>{
    'use strict'
    
    console.log(req.originalUrl)
    console.log(req.baseUrl)
    console.log(req.route)
    
    // 使用严格模式
    // console.log(userAgent) 使用let声明变量时
    // 不能提前使用这个变量，会报错
    let userAgent = req.get('User-Agent')
    // let相当var，let的限制比var更大，代码出错的可能性更小
    
    console.log('UserAgent的值是' + userAgent)
    console.log('用户语言偏好' + req.get('Accept-Language'))

    console.log('收到了POST请求：' + JSON.stringify(req.body))
    // setTimeout()是异步的，它不会等待延迟的代码
    setTimeout(function() {
        res.status(200).send('感谢您的评价！')
    }, 10 * 1000);
})

app.listen(3000, ()=>{
    console.log('服务器启动成功！')
})

// 总结：
// 使用XHR发起请求
// 请求行：
//     包括请求方法和URL
//     xhr.open('GET', 'url')
// 请求头：
//     xhr.setRequestHeader('name', 'value')
//     设置请求头，必须在xhr.open()方法之后调用
// 空行：
//     不需控制
// 请求体：
//     xhr.send()
//     发送请求体

// 在Node.js服务端获取请求数据
// 请求行：
//     获取请求方法   req.route
//     获取URL        req.originalUrl
//     获取URL中的数据   req.query.name
// 请求头：
//     获取请求头       req.get('name')
// 请求体：
//     获取请求体中的数据：req.body.name
//     如果数据格式是urlencoded           body-parser模块
//     如果数据格式是multipart/formdata   multer模块

// 在Node.js中设置响应数据：
// 响应行：
//     设置状态码：  res.status(200)
// 响应头：
//     设置响应头：      res.set(name, value)
//                     res.set({})
// 响应体：
//     添加响应体：      res.append('...')
//     结束响应体：      res.end()
//     设置响应体：      res.send('...') 
//         JSON         res.json({}) 

// 使用XHR获取响应数据：
// 在哪获取响应数据？
//     设置onreadystatechange回调函数
//     当readyState==4时可以获取响应数据
// 响应行：
//     状态码     xhr.status
//     状态信息   xhr.statusText
// 响应头：
//     获取响应头     xhr.getResponseHeader('name')
//     获取所有响应头 xhr.getAllResponseHeaders()
// 响应体：
//     根据响应体内容类型不同，分别可以使用：
//     xhr.response
//     xhr.responseText
//     xhr.responseXML