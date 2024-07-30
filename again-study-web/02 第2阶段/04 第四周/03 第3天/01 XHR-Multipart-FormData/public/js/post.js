var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr.responseText)
    }
}


xhr.open('POST', '/comment')

// 如果向服务端发送的数据是urlencoded，需要设置Content-Type请求头
// 如不设置，某些服务器可能无法正常解析收到数据
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

// 向服务端发送数据，发送POST请求时，数据放入请求体
xhr.send('username=小智&age=10&content=我是你的小助手哦')
