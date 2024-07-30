// 计算后的值
console.log($('div').css('font-size'))
// 获取多个值
// 注意直接写padding得不到值
console.log($('div').css(['font-size', 'padding-top', 'font-family', 'background-color']))

// 单独设置1个样式
$('div').css('background-color', 'blue')

// 同时设置多个样式
$('div').css({'background-color': 'green', 'font-size': '1rem', 'margin': '10px'})

// 另外一种写法
$('div').css({
    backgroundColor: 'pink',
    fontSize: '2rem'
})

// $('li').css('font-size', function(i, oldValue){
//     return parseInt(oldValue) * (i + 1) + 'px'
// })

$('li').css('transform', function(index, oldValue){
    return 'translate(' + (Math.abs((index - 3)) * - 5 + 200) + 'px, 50px) rotate(' + (index-3) * 10 + 'deg)'
}).css('transform-origin', 'left center')


// 恢复原始值
// $('div').css('font-size', 'inherit')
// $('div').css('font-family', 'inherit')
// $('div').css('margin', 'auto')
// $('div').css('color', 'initial')
// $('div').css('background', 'none')
// $('div').css('padding', 0)

