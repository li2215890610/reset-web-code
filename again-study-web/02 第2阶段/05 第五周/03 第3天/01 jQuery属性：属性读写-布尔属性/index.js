// var a = document.getElementsByTagName('a')[0]
// var href = a.getAttribute('href')
// console.log(href)

// console.log(a.href)

// // 更详细的内容请查看Xmind总结

// a.target = '_blank'

// var target = $('a').attr('target')
// console.log(target)


// $('a').removeAttr('href')

// $('a').attr('href', 'https://www.baidu.com')


/*--------------------------------------------------*/


// 总结：
// 设置值：
// $('input').attr('checked', '123')   
// 能转换为true的什么值都行
// 在查看器中能观察到

// $('input').prop('checked', true)
// 能转换为true的什么值都行
// 在查看器中观察不到

// 获取值：
// 用attr选中的：
// 返回'checked'
// console.log($('input').attr('checked'))
// 返回true
// console.log($('input').prop('checked'))

// 用prop选中的：
// 返回undefined
// console.log($('input').attr('checked'))
// 返回false
// console.log($('input').prop('checked'))

// 移除：
// 使用attr选中的
// 不再选中
// $('input').removeAttr('checked')
// 仍然选中
// $('input').removeProp('checked')
// 不选中要使用
// $('input').prop('checked', false)

// 使用prop选中的
// 不再选中
// $('input').removeAttr('checked')
// 仍然选中
// $('input').removeProp('checked')
// 不选中要使用
// $('input').prop('checked', false)