// jQuery.get() jQuery 可以简写为 $
// 发起GET请求
$.get('/api/user/login',                    //请求地址
    {name: '张三', password: '123456'},     //发送数据
    function(res){                          //成功时的回调函数
        alert(res.message)
    })

// 原生的写法要麻烦得多，需要记住很多东西
// var xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4) {
//         var res = JSON.parse(xhr.responseText)
//         alert(res.message)
//     }
// }

// xhr.open('GET', '/api/user/login?name=张三&password=123456')
// xhr.send()


// API         Application Programing Interface 
//             应用程序编程接口
            
// 程序员开发程序时直接调用的接口（类、对象、方法、属性、事件等）
// 通过接口（接口即连接点，可以将程序员的代码和系统的代码连接到一起）
// 程序员可以使用系统的功能或者其它代码库的功能