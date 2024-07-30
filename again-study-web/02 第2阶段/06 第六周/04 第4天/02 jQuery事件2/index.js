// $('button').one('click', function(){
//     $(this).parent().remove()
// })

// $('div').one('click', function(){
//     if(Math.random() > 0.5){
//         $('h1').text('恭喜您中奖￥5000000')
//         .css('color', 'yellow')
//     }
//     else{
//         $('h1').text('抱歉请明天再来')
//     }
// })

// var times = 0

// $('div').bind('click', 3, function(ev){
//     times++
//     if(times > ev.data){
//         $('h1').text('不要太贪心')
//         alert('还在监听，还会执行！')
//         $('div').unbind('click')
//     }
//     else{
//         $('h1').text('+' + times)
//     }
// })

// $('div').on('click', 'h1', 3, function(ev){
//     times++
//     if(times > ev.data){
//         $('h1').text('不要太贪心')
//         alert('还在监听，还会执行！')
//         $('div').off('click')
//     }
//     else{
//         $('h1').text('+' + times)
//     }
// })

// $('div').on('click', function(ev){
//     times++
//     // if(times > 3){
//     //     $('h1').text('不要太贪心')
//     //     alert('还在监听，还会执行！')
//     //     $('div').off('click')
//     // }
//     // else{
//         $('h1').text('+' + times)
//     // }
    
//     if(times == 24){
//         $('div').trigger('times.zhiyou.com.cn', [times, 'HTML5'])
//     }
// })

// $('div').on('times.zhiyou.com.cn', function(ev, times, course){
//     alert(ev.namespace + times + course + ev.type)
// })

// $('button').click(function(){
//     $('div').trigger('click')
//     $('div').trigger('click')
//     $('div').trigger('click')
// })

// $('div').click(function(){
//     alert('div被点击了')
// })

$('body').delegate('div', 'click', function(){
    alert('div被点击了')
})

$('button').click(function(){
    $('<div>新DIV</div>').appendTo('body')
})

document.documentElement.addEventListener('click', function(ev){
    alert('我在<html>标签上监听点击事件')
    ev.stopPropagation()
}, true)