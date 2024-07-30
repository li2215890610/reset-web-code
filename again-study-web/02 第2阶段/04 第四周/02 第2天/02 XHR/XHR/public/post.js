var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr.responseText)
    }
}


xhr.open('POST', 'comment')
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 如果向服务端发送的数据是urlencoded，需要设置Content-Type请求头
// 如不设置某些服务器可能无法正常解析收到数据

xhr.send('petname=张三&score=5&content=我是一名工程师')
// 向服务端发送数据