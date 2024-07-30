$('ul').click(function(){
    
    // 详细请查看Xmind总结
    
    // $('li,small').toggle(5 * 1000, function(){
    //     alert($(this).text() + '-动画完成！')
    // })
    
    // $('ul,small').fadeToggle(5 * 1000, function(){
    //     alert($(this).text() + '-动画完成！')
    // })
    
    // $('ul, small').fadeTo(2 * 1000, 0.5, 'linear', function(){
    //     alert($(this).text() + '-动画完成！')
    // })
    
    // $('ul, small').slideToggle(5 * 1000, 'linear', function(){
    //     alert($(this).text() + '-动画完成！')
    // })
    
    
    // var coords = $('ul').offset()
    
    // 自定义动画及链式动画
    // 使用jQuery.Color插件支持颜色动画
    // $('ul').css('position', 'absolute').animate({
    //     'left': 400,
    //     'line-height': 32,
    //     'color': 'blue'
    // }, 5 * 1000).animate({
    //     top: 500,
    //     lineHeight: '120%',
    //     color: 'red'
    // }, 3 * 1000).animate({
    //     left: coords.left,
    //     top: coords.top,
    //     lineHeight: '1.5rem',
    //     color: '#000'
    // }, 4 * 1000)
    
    
    
    // 预定义动画与自定义动画混合使用
    // $('ul').css('position','absolute')
    // .fadeTo(3* 1000, 0.3)
    // .animate({
    //     // left: '+=100'
    //     // width: ['toggle', 'swing'],
    //     // height: ['toggle', 'linear']
    //     left: 300
    // }, 3 * 1000)
    
    
    
    // 使用delay方法延迟动画
    // $('ul').slideToggle(2*1000)
    // .delay(3*1000)
    // .slideToggle(2*1000)
    
    // var color = 'red'
    
    // function changeColor(){
    //     $('ul').animate({
    //         backgroundColor: color
    //     }, 1000, function(){
    //         color = $.Color(color)
    //         color = color.hue(color.hue() + 60)
            
    //         changeColor()
    //     })
    // }
    
    // changeColor()
    
    
    
    $('ul').css('position', 'absolute').animate({
        left: 300,
        color: 'blue'
    }, 10*1000, function(){
        // alert('left动画完成！')
    }).animate({
        top: 400
    }, 5 * 1000, function(){
        // alert('top动画完成！')
    })
})

$(':header').click(function(){
    $('ul').stop(false, false)
    // $('ul').finish()
})

$('small').click(function(){
    $('ul').dequeue()
})