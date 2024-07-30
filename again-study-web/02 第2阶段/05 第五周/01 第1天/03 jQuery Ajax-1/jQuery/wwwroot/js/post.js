$.post('/api/user/login', 
    {name:'张三',password:'123456'},
    function(res, statusText, jqXHR){
        alert(res.message)
        alert(statusText)
        console.dir(jqXHR)
        alert(jqXHR.statusText)
        alert(jqXHR.status)
        alert(jqXHR.getResponseHeader('Content-Length'))
        alert(jqXHR.getResponseHeader('X-Powered-By'))
    })

// 使用jQuery编写代码不需考虑非常具体的细节问题
// 代码量要少得多，而且不容易出错

// $.post()        专门用来发起POST请求
// $.get()         专门用来发起GET请求
// 都需４个参数
// 参数１：请求地址
// 参数２：发送的数据，如果是GET请求，会将数据urlencode，然后附加到url后面
//         支持对象格式的数据
// 参数3：请求成功时的回调函数
        //   回调函数有3个参数
        //   参数1：服务端返回的数据（经过jQuery转换后的数据，不需再次手动转换）
        //   参数2：Ajax请求的状态，success表示成功
        //   参数3：jqXHR，是jQuery在XHR对象的基础上又附加一些功能
        // 通过第3个参数可以获取响应头及其它通过原生XHR才能获取的数据
        // 获取响应头：xhr.getResponseHeader('header-name')
        
        
// 参数4：服务端返回的数据类型（通常不用传，jQuery会猜测类型）

// var xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4){
//         var res = JSON.parse(xhr.responseText)
//         alert(res.message)
//     }
// }

// xhr.open('POST', '/api/user/login')
// xhr.setRequestHeader('Content-Type', 
//     'application/x-www-form-urlencoded')

// xhr.send('name=张三&password=123456')
