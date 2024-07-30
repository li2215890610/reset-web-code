// 更基础的发起Ajax请求方法，功能更强大
// 但是设置更多
layer.load(1, {shade:0.5})

$.ajax({
    accepts: 'text/json',       //会影响请求头中的Accept请求头
    async: true,                //异步发起请求，设置为false则同步
    beforeSend: function(xhr){
        // 在这里可以设置请求头等
        // alert('发起请求之前会调用！')
    },
    cache: false,               //是否允许使用缓存的数据
                                // 如果使用缓存，则有可能不发起请求
                                // 直接使用上次对同一个URL请求时获得的数据
    // contentType                 默认是application/x-www-form-urlencoded
    //                             如果极个别情况下需要使用multipart/form-data时
    //                             需要修改这个值
    
    context: {title:'jQuery Ajax'},        //             请求成功时回调函数中的this指向的对象
    data: {name:'ZhangSan', password: '123456'},  //发送到服务端的数据，jQuery会自动进行urlencode
    dataFilter: function(data, type){
        // alert('正在对服务端返回的数据进行处理')
        // if(type == 'json') return JSON.parse(data)
        return data
        //此处仅作为演示，
        // jQuery会自动处理大多数情况下服务端返回的数据
    },
    dataType: 'json',       //服务端返回的数据类型
    error: function(xhr, status, err){
        // alert('发起了一个错误：' + err)
        if(err == 'timeout'){
            layer.alert('不好意思，网络超时了..', {icon:5}, 
                function(){
                    layer.closeAll()
                })
        }
    },
    headers: {'Y-Student-Name': 'Zhang'},   //自定义请求头
    success: function(data, status, xhr){
        // alert(data.message)
        // alert(xhr.getResponseHeader('Y-School'))
        layer.closeAll()
    },
    url: '/api/user/login',
    type: 'POST',
    timeout: 10 * 1000
})