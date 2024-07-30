var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        var arr = JSON.parse(xhr.responseText)
        
        var messages = ''
        // 反向循环一个数组
        // 使最新的留言出现最上面
        for(var i = arr.length - 1; i > -1; i--){
            var message = arr[i]
            
            // 使用DOM向页面添加留言数据
            // var box = document.createElement('div')
            // document.body.appendChild(box)
            
            // var content = document.createElement('p')
            // content.innerText = message.content
            // box.appendChild(content)
            
            // var time = document.createElement('span')
            // time.innerText = formatDateTime(new Date(message.time))
            // box.appendChild(time)
            
            // var ip = document.createElement('span')
            // ip.innerText = formatIP(message.ip)
            // box.appendChild(ip)
            
            // 使用拼字符串的方法向页面添加留言
            messages += '<section>'
            messages += '<p>'
            messages += message.content
            messages += '</p>'
            messages += '<span>'
            messages += formatDateTime(new Date(message.time))
            messages += '</span>'
            messages += '<span>'
            messages += formatIP(message.ip)
            messages += '</span>'
            messages += '</section>'
        }
        
        document.querySelector('article').innerHTML = messages
    }
}

xhr.open('GET', 'messages')
xhr.send()

function formatDateTime(t){
    var M = t.getMonth() + 1,
        d = t.getDate(),
        h = t.getHours(),
        m = t.getMinutes()
        
        // js区分大小写！所以可以使用M、m表示两个不同的变量
        
    M = M < 10 ? '0' + M : M
    d = d < 10 ? '0' + d : d
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    
    return t.getFullYear() + '-' + M + '-' + d + ' ' + h + ':' + m
}

function formatIP(ip){
    if(ip.startsWith('::1')){
        return '127.0.0.1'
    }
    if(ip.startsWith('::ffff:')){
        return ip.substr(7)
    }
}