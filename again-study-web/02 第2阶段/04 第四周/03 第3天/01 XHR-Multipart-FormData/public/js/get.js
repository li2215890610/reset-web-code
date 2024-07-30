// 创建一个XHR对象，后面将使用这个对象发起网络请求
var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(ev){
    switch (xhr.readyState) {
        case 0:
            console.log('未打开')
            break;
        case 1:
            console.log('未发送')
            break;
        case 2:
            console.log('已获取响应头')
            break;
        case 3:
            console.log('正在下载响应体')
            break;
        case 4:
            console.log('请求已完成')
            
            console.log('状态码：' + xhr.status)
            console.log('状态描述：' + xhr.statusText)
            console.log('响应类型：' + xhr.responseType)
            console.log('响应文本：' + xhr.responseText)
            
            console.log('响应头：')
            console.log('Date：' + xhr.getResponseHeader('Date'))
            console.log('X-Powered-By：' + xhr.getResponseHeader('X-Powered-By'))
            // getResponseHeader获取指定的响应头信息
            console.log(xhr.getAllResponseHeaders())
            // getAllResponseHeaders获取所有的响应头
            break;
        default:
            break;
    }
}

// 参数1：设置请求方法为GET
// 参数2：请求地址
// 参数3：是否使用异步方式发起请求，默认为true(即异步)
xhr.open('GET', '/comment?username=XiaoZhi&age=10&content=我是你的小助手')

// 发送请求
xhr.send()




