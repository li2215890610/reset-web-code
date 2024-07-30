// alert(document.body)
// alert(document.body.children)

// 此时document.body还没有创建出来
// button是找不到的，所以代码无效！
// $('button').click(function(){
//     alert('可以弹出吗？')
// })

// 正确的做法是使用 $(loadedCallback) 这种写法
// 在 HTML 加载完成之后会回调 loadedCallback
// 比写 <body onload='loadedCallback()'>更加灵活
// 直接写body.onload是不行的，因为此时body还不存在
// body.addEventListener('load', loadedCallback)
// 也不行

$(function(){
    var time = new Date()
    
    // $('button').click(time, function(ev){
    //     alert('从' + ev.data + '开始监听点击事件')
    // })
    
    $('a').click(function(){
        alert('超链接点击事件')
    })
})

// $(function(){
//     alert('HTML加载完成！')
// })


setInterval(function(){
    $('a').click()
    // $('a').trigger('click')
    // 上面2个方法现在不起作用
    // location.href = $('a').attr('href')
    // window.open($('a').attr('href'), '_blank')
}, 5 * 1000)

// setInterval(function(){
//     $(':submit').click()
// }, 5 * 1000)