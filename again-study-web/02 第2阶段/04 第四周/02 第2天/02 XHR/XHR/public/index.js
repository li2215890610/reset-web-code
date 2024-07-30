var xhr = new XMLHttpRequest()
// 创建一个XHR对象，后面将使用这个对象发起网络请求

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


xhr.open('GET', '/comment?petname=ZhangSan&score=5&content=我是一名工程师')
// 设置请求方法，请求地址，及是否使用异步方式发起请求

xhr.send()
// 发送请求



